use std::fs::File;
use std::io::{self, Read, Write};

fn main() -> io::Result<()> {
    let mut stdin = io::stdin();
    // let mut handle = stdin.lock();

    let mut buffer = vec![0; 65536];
    let mut file = File::create("source.txt")?;

    while let Ok(n) = stdin.read(&mut buffer) {
        if n > 0 {
            write_to_file(&mut file, &buffer[..n])?;
            file.flush()?;
        } else {
            break;
        }
    }

    println!("buffer len: {}", buffer.len());
    Ok(())
}

fn write_to_file(file: &mut File, buffer: &[u8]) -> io::Result<()> {
    file.write(&buffer)?;
    Ok(())
}
