const pug = require('pug');

pug.filters['my-own-filter'] = function (text, options) {
  if (options.addStart) text = 'Start\n' + text;
  if (options.addEnd)   text = text + '\nEnd';
  return text;
}

console.log(pug.filters);

// Compile the source code
const compiledFunction = pug.compileFile('../pages/filters.pug');

// Render a set of data
console.log(compiledFunction());