const fs = require("fs"); //We can also use a built-in module in Node to access the file system (the files on your computer),
//called fs. We can use this module to read, create, remove, rename, etc... directories and files on our machine
// const chalk = require("chalk-animation");
const { animateString } = require("./animate-string");
const contents = fs.readdirSync("./animals"); // accesses the file and reads it. fs gives it the ability to do it. Think, like react's methods.
animateString(contents.join("\n"));

// const animation = chalk.rainbow(contents.join("\n"));

// debugger; with the debugger here, you can see in chromium window that the scope has the methods for animation. One of them to use is start.
// animation.start();

// setTimeout(() => animation.stop(), 2000);
