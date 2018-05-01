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

# Examples:

### Basic
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/basic.pug |
| basic | views/includes/basic.pug |
| blockquote | views/includes/blockquote.pug |
| self closing html | views/includes/self-closing-html.pug |
| variables | views/includes/vars.pug |
| form fields | views/includes/form-fields.pug |


### Attributes
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/attributes.pug |
| basic attributes | views/attrs.pug |
| data-attributes | views/includes/attrs-data.pug |
| colon attributes | views/includes/attrs-colon.pug |
| attributes using JS function | views/includes/attrs-js.pug |
| attributes unescaped | views/includes/attrs-unescaped.pug |


### Blocks
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/block.pug |
| block code | views/includes/block-code.pug |
| block expansion | views/includes/block-expansion.pug |
| block expansion shorthands | views/includes/block-expansion-shorthands.pug |


### Case
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/case.pug |
| case fall through | views/includes/case-fall-through.pug |


### Classes
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/classes.pug |
| classes | views/includes/classes.pug |
| classes empty | views/includes/classes-empty.pug |


### Code
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/code.pug |
| code | views/includes/code.pug |
| code iteration | views/includes/code-iteration.pug |
| code escape | views/includes/code-escape.pug |
| code conditionals | views/includes/code-conditionals.pug |


### Filter
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/filter.pug |
| Filter: Stylus | views/includes/filter-stylus.pug |
| Filter: Less | views/includes/filter-less.pug |
| Filter: CoffeeScript | views/includes/filter-coffeescript.pug |
| Filter: Markdown | views/includes/filter-markdown.pug |
| Filter: Inline | views/includes/filter-inline.pug |
| Filter: Inside Include | views/includes/filter-inside-include.pug |
| Filter: Include | views/includes/filter-include.pug |
| Filter: Empty | views/includes/filter-empty.pug |
| Filter: Nested | views/includes/filter-nested.pug |
| Filter: Custom | ?? |


For Filter Stylus:
```sh
$ npm install --save jstransformer-stylus
```

For Filter Less:
```sh
$ npm install --save jstransformer-less
```

For Filter cdata:
```sh
$ npm install --save jstransformer-cdata
```

For Filter coffee script:
```sh
$ npm install --save jstransformer-coffee-script
```

For Filter markdown:
```sh
$ npm install --save  jstransformer-markdown
```

For Filter markdown inline:
```sh
$ npm install --save jstransformer-markdown-it
```

For Filter uglify-js:
```sh
$ npm install --save  jstransformer-uglify-js
```



### HTML
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/html.pug |
| html | views/includes/html.pug |


### HTML 5
| Category | Location |
| ------ | ------ |
| html | views/includes/html5.pug |


### Includes
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/includes.pug |


### Loops
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/loops.pug |
| variables | views/includes/while.pug |


### Source
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/source.pug |
| source | views/includes/source.pug |


### Variables
| Category | Location |
| ------ | ------ |
| Index Page | views/pages/vars.pug |
| variables | views/includes/vars.pug |


[Online Pug Conversion](https://pughtml.com/)

Pending:
https://github.com/pugjs/pug/blob/master/packages/pug/test/cases/blocks-in-if.pug
https://github.com/pugjs/pug/blob/master/packages/pug/test/cases/blocks-in-blocks.pug