const fs = require("node:fs/promises");

(async () => {
  const file = await fs.open("./files/one-gig.txt", "w");
  const writeStream = file.createWriteStream();

  const iterationCount = 100_000_000;
  for (let i = 0; i < iterationCount; i++) {
    const buffer = Buffer.from(` ${i}${i % 5 === 0 ? "\n" : " "}`, "utf-8");

    if (!writeStream.write(buffer)) {
      await new Promise((resolve) => writeStream.once("drain", resolve));
    }
  }

  writeStream.end();
})();
