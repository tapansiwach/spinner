const chars = ["|", "/", "-", "\\"];
const loopArray = chars + chars + chars;

let delay = 0;
for (const char of loopArray) {
  delay += 200;
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);

}

setTimeout(() => {
  console.log();
}, delay);