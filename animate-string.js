const chalk = require("chalk-animation");

// all the valid methods for rainbow
const validMethods = ["glitch", "karaoke", "neon", "pulse", "radar", "rainbow"];

// After you ran "ndb index.js pulse", you used the debugger on index.js to jump into this function (animate-string) to find out where pulse is on the arguments array. process.argv
// was typed in console to see position of pulse.
const scriptArg = process.argv[2];

// check if arg is valid and use it or default to'rainbow'
const method = validMethods.includes(scriptArg) ? scriptArg : "rainbow";

function animateString(string) {
  // const animation = chalk.rainbow(string);
  // use method that was selected above
  const animation = chalk[method](string);
  animation.start();
  setTimeout(() => animation.stop(), 2000);
}

module.exports = { animateString: animateString };
