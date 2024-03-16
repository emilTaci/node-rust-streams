const fs = require("node:fs/promises");
const cp = require("node:child_process");

(async () => {
  const file = "./files/one-gig.txt";

  const fileHandler = await fs.open(file, "r");
  const readStream = fileHandler.createReadStream();

  const rustProcess = cp.spawn("../target/debug/child-processes");

  rustProcess.stderr.pipe(process.stderr);
  rustProcess.stdout.pipe(process.stdout);

  readStream.pipe(rustProcess.stdin);

  readStream.on("end", () => {
    console.log("File sent to Rust");
    rustProcess.stdin.end();
  });
})();
