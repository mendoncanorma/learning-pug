# learning-pug
###### Norma is learning pug

[Getting Started](https://pugjs.org/api/getting-started.html)

Installation:

### To compile .pug files via JS
    - $ npm install pug
    - Example - refer to js/template.compiler.js
    - The .pug files are placed under views directory

### compile .pug files via CLI
    - $ npm install -g pug-cli
    - CLI command reference [https://github.com/pugjs/pug-cli]

## Examples:

### Basic
  - views/pages/basic.pug
#### blockquote
  - views/includes/blockquote.pug
#### self closing html
  - views/includes/self-closing-html.pug
#### variables
  - views/includes/vars.pug


### Attributes
  - views/pages/attributes.pug
#### basic attributes
  - views/attrs.pug
#### data-attributes
  - views/includes/attrs-data.pug
#### colon attributes
  - views/includes/attrs-colon.pug
#### attributes using JS function
  - views/includes/attrs-js.pug
#### attributes unescaped
  - views/includes/attrs-unescaped.pug


### Blocks
  - views/pages/block.pug
#### block code
  - views/includes/block-code.pug
#### block expansion
  - views/includes/block-expansion.pug
#### block expansion shorthands
  - views/includes/block-expansion-shorthands.pug


### Case
    - views/pages/case.pug
#### block case fall through
  - views/includes/block-code.pug


### Classes
    - views/pages/classes.pug
#### classes
  - views/includes/classes.pug
#### classes empty
  - views/includes/classes-empty.pug


### Code
    - views/pages/code.pug
#### code
  - views/includes/code.pug
#### code iteration
  - views/includes/code-iteration.pug
#### code escape
  - views/includes/code-escape.pug
#### code conditionals
  - views/includes/code-conditionals.pug


### Includes
    - views/pages/includes.pug


### Loops
    - views/pages/loops.pug
#### variables
  - views/includes/while.pug


### Source
    - views/pages/source.pug
#### variables
  - views/includes/source.pug


### Variables
    - views/pages/vars.pug
#### variables
  - views/includes/vars.pug


[Online Pug Conversion](https://pughtml.com/)

Pending:
https://github.com/pugjs/pug/blob/master/packages/pug/test/cases/blocks-in-if.pug
https://github.com/pugjs/pug/blob/master/packages/pug/test/cases/blocks-in-blocks.pug