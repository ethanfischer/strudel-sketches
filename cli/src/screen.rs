// A grid of colored characters. Each frame is drawn into a new grid, and flush() writes only the cells
// that changed since the last frame, so the terminal keeps up with 30 frames a second.

use crate::color::Rgb;
use crossterm::cursor::MoveTo;
use crossterm::style::{Attribute, Color, Print, SetAttribute, SetBackgroundColor, SetForegroundColor, SetUnderlineColor};
use crossterm::{queue, terminal};
use std::io::{self, Write};

#[derive(Clone, Copy, PartialEq)]
pub struct Cell {
    pub ch: char,
    pub fg: (u8, u8, u8),
    pub underline: Option<(u8, u8, u8)>,
}

const BLANK: Cell = Cell { ch: ' ', fg: (0, 0, 0), underline: None };

pub struct Grid {
    pub w: usize,
    pub h: usize,
    cells: Vec<Cell>,
}

impl Grid {
    pub fn new(w: usize, h: usize) -> Grid {
        Grid { w, h, cells: vec![BLANK; w * h] }
    }

    // Writes one character; off the grid it does nothing
    pub fn put(&mut self, x: i32, y: i32, ch: char, fg: Rgb) {
        if let Some(cell) = self.cell_mut(x, y) {
            *cell = if ch == ' ' { BLANK } else { Cell { ch, fg: to8(fg), underline: None } };
        }
    }

    // Writes each non-space character of s from column x
    pub fn text(&mut self, x: i32, y: i32, s: &str, fg: Rgb) {
        for (i, ch) in s.chars().enumerate() {
            if ch != ' ' {
                self.put(x + i as i32, y, ch, fg);
            }
        }
    }

    pub fn erase(&mut self, x: i32, y: i32) {
        if let Some(cell) = self.cell_mut(x, y) {
            *cell = BLANK;
        }
    }

    pub fn cell_mut(&mut self, x: i32, y: i32) -> Option<&mut Cell> {
        if x < 0 || y < 0 || x as usize >= self.w || y as usize >= self.h {
            return None;
        }
        Some(&mut self.cells[y as usize * self.w + x as usize])
    }
}

pub fn to8(c: Rgb) -> (u8, u8, u8) {
    let f = |v: f32| v.round().clamp(0., 255.) as u8;
    (f(c[0]), f(c[1]), f(c[2]))
}

pub struct Screen {
    last: Option<Grid>,
}

impl Screen {
    pub fn new() -> Screen {
        Screen { last: None }
    }

    // After a resize, the next flush writes every cell
    pub fn invalidate(&mut self) {
        self.last = None;
    }

    pub fn flush(&mut self, grid: Grid) -> io::Result<()> {
        let mut out = io::stdout().lock();
        let full = !matches!(&self.last, Some(l) if l.w == grid.w && l.h == grid.h);
        if full {
            queue!(out, SetBackgroundColor(Color::Black), terminal::Clear(terminal::ClearType::All))?;
        }
        let mut fg = None;
        let mut underline = None;
        let mut at = None; // where the terminal cursor is after the last write
        for y in 0..grid.h {
            for x in 0..grid.w {
                let i = y * grid.w + x;
                let cell = grid.cells[i];
                if !full && self.last.as_ref().unwrap().cells[i] == cell {
                    continue;
                }
                if full && cell == BLANK {
                    continue; // the clear made it blank
                }
                if at != Some((x, y)) {
                    queue!(out, MoveTo(x as u16, y as u16))?;
                }
                if cell.ch != ' ' && fg != Some(cell.fg) {
                    let (r, g, b) = cell.fg;
                    queue!(out, SetForegroundColor(Color::Rgb { r, g, b }))?;
                    fg = Some(cell.fg);
                }
                if underline != Some(cell.underline) {
                    match cell.underline {
                        Some((r, g, b)) => queue!(out, SetUnderlineColor(Color::Rgb { r, g, b }), SetAttribute(Attribute::Underlined))?,
                        None => queue!(out, SetAttribute(Attribute::NoUnderline))?,
                    }
                    underline = Some(cell.underline);
                }
                queue!(out, Print(cell.ch))?;
                at = Some((x + 1, y));
            }
        }
        out.flush()?;
        self.last = Some(grid);
        Ok(())
    }
}
