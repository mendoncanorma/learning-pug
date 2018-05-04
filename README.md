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


### npm packages for pug filter

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

For Filter verbatim:
```sh
$ npm install --save  jstransformer-verbatim
```


# Examples:

### Basic
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/basic.pug |
| 2. Basic | views/includes/incl-basic.pug |
| 3. Blanks | views/includes/incl-blanks.pug |
| 4. Comments | views/includes/incl-comments.pug |


### Case Statement
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/case.pug |
| 2. Case | views/includes/incl-case.pug |
| 2. Comments in case | views/includes/incl-comments-case.pug |


# Notes:
> Blank lines between tags in HTML are ignored. Basic #3.

[Online Pug Conversion](https://pughtml.com/)

Pending:
https://github.com/pugjs/pug/blob/master/packages/pug/test/cases/blocks-in-if.pug
https://github.com/pugjs/pug/blob/master/packages/pug/test/cases/blocks-in-blocks.pug