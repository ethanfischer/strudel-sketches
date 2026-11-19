// Monkeytype's English quotes (GPL-3.0), filtered as in acidpoly.js: only quotes we can type without
// holes, from cyberpunk, AI games and dystopias. The list downloads once and stays in the cache folder.

use regex::Regex;
use serde::Deserialize;
use std::error::Error;
use std::fs;
use unicode_normalization::UnicodeNormalization;

const QUOTES_URL: &str = "https://cdn.jsdelivr.net/gh/monkeytypegame/monkeytype@20b9530d720f04a4710853534c6f885d3cfe0d4c/frontend/static/quotes/english.json";
// Matched on the source name: about 130 quotes
const QUOTE_SOURCES: &str = r"(?i)mr\. robot|the matrix|deus ex|blade runner|serial experiments|black mirror|westworld|terminator|ghost in the shell|^hackers$|system shock|total recall|tron:|detroit: become|portal|half-life|metal gear|ready player|evangelion|^1984|orwell|fahrenheit 451|brave new world";

pub struct Quote {
    pub words: Vec<String>,
    pub source: String,
}

#[derive(Deserialize)]
struct File {
    quotes: Vec<Raw>,
}

#[derive(Deserialize)]
struct Raw {
    text: String,
    source: String,
}

pub fn load() -> Result<Vec<Quote>, Box<dyn Error>> {
    let cache = dirs::cache_dir().ok_or("no cache folder")?.join("type-til-ya-die").join("english.json");
    let json = match fs::read_to_string(&cache) {
        Ok(json) => json,
        Err(_) => {
            eprintln!("downloading the quotes…");
            let json = ureq::get(QUOTES_URL).call()?.body_mut().with_config().limit(50 << 20).read_to_string()?;
            fs::create_dir_all(cache.parent().unwrap())?;
            fs::write(&cache, &json)?;
            json
        }
    };
    let file: File = serde_json::from_str(&json)?;
    let sources = Regex::new(QUOTE_SOURCES)?;
    let f = Filters::new();
    let quotes: Vec<Quote> = file.quotes.into_iter()
        .filter(|q| f.usable(&q.text) && sources.is_match(q.source.trim()))
        .map(|q| Quote { words: f.typeable(&q.text), source: q.source })
        .collect();
    if quotes.is_empty() {
        return Err("no quotes matched the sources".into());
    }
    Ok(quotes)
}

struct Filters {
    unusable: Regex,
    link: Regex,
}

impl Filters {
    fn new() -> Filters {
        Filters {
            unusable: Regex::new(r"(?i)[\d&=+]|[a-z]{21,}").unwrap(),
            // Links, @handles and dotted tokens such as u.s. or e.g. (the token is lowercase)
            link: Regex::new(r"[/@]|www\.|[a-z]\.[a-z]").unwrap(),
        }
    }

    // Skip a quote if typeable() would leave a hole in it: digits, & = +, a word too long for a line,
    // or a dropped token between two words
    fn usable(&self, text: &str) -> bool {
        !self.unusable.is_match(text) && !self.has_hole(text)
    }

    fn has_hole(&self, text: &str) -> bool {
        let lower = text.to_lowercase();
        let kinds: Vec<&str> = lower.split_whitespace()
            .map(|t| if self.link.is_match(t) { "drop" } else if t.chars().any(|c| c.is_ascii_lowercase()) { "word" } else { "other" })
            .collect();
        match (kinds.iter().position(|k| *k == "word"), kinds.iter().rposition(|k| *k == "word")) {
            (Some(a), Some(b)) => kinds[a..=b].contains(&"drop"),
            _ => false,
        }
    }

    // Quote text → words you can type: lowercase a-z and apostrophes, no links or @handles
    fn typeable(&self, text: &str) -> Vec<String> {
        let plain: String = text.to_lowercase().nfd()
            .filter(|c| !('\u{300}'..='\u{36f}').contains(c)) // café → cafe
            .map(|c| if "’‘ʼ".contains(c) { '\'' } else { c })
            .collect();
        let kept = plain.split_whitespace().filter(|t| !self.link.is_match(t)).collect::<Vec<_>>().join(" ");
        let letters: String = kept.chars()
            .map(|c| if "-–—".contains(c) { ' ' } else { c })
            .filter(|c| c.is_ascii_lowercase() || *c == '\'' || *c == ' ')
            .collect();
        letters.split(' ')
            .map(|w| w.trim_matches('\''))
            .filter(|w| !w.is_empty() && w.len() <= 20) // a longer word does not fit on one line
            .map(String::from)
            .collect()
    }
}
