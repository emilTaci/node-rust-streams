**README**

---

**Experimental Data Stream App**

This repository contains an experimental data streaming application written in Rust and JavaScript. The purpose of this app is to demonstrate a basic data streaming functionality where Node.js sends a stream of data to Rust, which then writes it to a file.

### Features:
- Node.js for sending data streams.
- Rust for accepting data streams and writing them to a file.

### Usage:
1. Clone the repository.
2. Run the "create-big-file.js" script to generate a large file with data.
3. Build the Rust backend using the "cargo build" command.
4. Start the "send-to-rust.js" file to initiate data stream transmission.

**Note:** This application is currently in an experimental stage and will be further improved over time.
