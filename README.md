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
| 5. Pipeless tags | views/includes/incl-pipeless-tags.pug |
| 6. Quotes | views/includes/incl-quotes.pug |
| 7. Block Expansion | views/includes/incl-block-expansion.pug |
| 8. Variables | views/includes/incl-variables.pug |
| 9. Templates | views/includes/incl-templates.pug |
| 10. Self Closing Tags | views/includes/incl-self-closing-tags.pug |
| 11. Text | views/includes/incl-text.pug |
| 11. Form Fields | views/includes/incl-form-fields.pug |
| 12. Source | views/includes/incl-source.pug |
| 13. Single Period | views/includes/incl-single-period.pug |
| 14. Namespace | views/includes/incl-namespace.pug |
| 15. Nesting | views/includes/incl-nesting.pug |
| 16. Inline | views/includes/incl-inline-tag.pug |




### Doctype
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/doctype.pug |


### Attributes
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/attributes.pug |
| 2. Basic | views/includes/incl-attributes.pug |
| 3. Data Attributes | views/includes/incl-attributes-data.pug |
| 4. Colon Attributes | views/includes/incl-attributes-colon.pug |
| 5. Attributes via JS | views/includes/incl-attributes-js.pug |
| 6. Unescaped Attributes | views/includes/incl-attributes-unescaped.pug |


### Classes
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/classes.pug |


### Code
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/code.pug |


### Case Statement
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/case.pug |
| 2. Case | views/includes/incl-case.pug |
| 2. Comments in case | views/includes/incl-comments-case.pug |


### Conditionals
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/conditionals.pug |
| 2. Conditionals | views/pages/incl-conditionals.pug |


### Loops
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/loops.pug |
| 2. Iteration | views/includes/incl-iteration |
| 3. While | views/includes/incl-while |
| 4. Each Else | views/includes/incl-each-else |


### Layout
| Category | Location |
| ------ | ------ |
| 1. Layout with 'block append' | views/pages/layout-block-append.pug |
| 2. Layout with 'append' | views/pages/layout-append.pug |
| 3. Layout with 'block prepend' | views/pages/layout-block-prepend.pug |
| 4. Layout with 'prepend' | views/pages/layout-prepend.pug |
| 5. Layout with 'multi append prepend' | views/pages/layout-multi-block-append-prepend.pug |


### Filters
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/filters.pug |
| 2. Filter Stylus | views/includes/incl-filter-stylus.pug |
| 3. Filter Markdown | views/includes/incl-filter-markdown.pug |
| 4. Filter Less | views/includes/incl-filter-less.pug |
| 5. Filter Inline | views/includes/incl-filter-inline.pug |
| 6. Filter Coffeescript | views/includes/incl-filter-coffeescript.pug |
| 7. Filter Nested | views/includes/incl-filter-nested.pug |
| 8. Filter Include | views/includes/incl-filter-include.pug |
| 9. Filter In Include | views/includes/incl-filter-in-include.pug |
| 10. Filter Empty | views/includes/incl-filter-empty.pug |
| 11. Filter Config | views/config/config.js |


### Mixins
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/mixins.pug |
| 2. Mixins | views/includes/incl-mixins.pug |
| 3. Mixin Merge | views/includes/incl-mixin-merge.pug |
| 4. Mixin Block | views/includes/incl-mixin-blocks.pug |
| 5. Mixin Block with tag behaviour | views/includes/incl-mixin-blocks-tag-behaviour.pug |
| 6. Mixin Attribute | views/includes/incl-mixin-attr.pug |
| 7. Mixin Rest Attribute | views/includes/incl-mixin-rest.pug |
| 8. Mixin Include | views/includes/incl-mixin-include.pug |
| 9. Mixin Hoist | views/includes/incl-mixin-hoist.pug |
| 10. Mixin at end of file | views/includes//incl-mixin-endoffile.pug |


### Interpolation
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/interpolation.pug |
| 2. interpolated elements | views/includes/incl-interpolated-elements.pug |
| 3. interpolation escape | views/includes/incl-interpolation-escape.pug |
| 4. interpolated mixin | views/includes/incl-interpolated-mixin.pug |
| 5. interpolated tags | views/includes/incl-interpolated-tags.pug |


### Includes
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/includes.pug |
| 2. Include extends relative | views/pages/include-extends-relative.pug |
| 3. Include extends from common template | views/pages/include-extends-of-common-template.pug |
| 4. Include extends from root | views/pages/include-extends-from-root.pug |



### Yield
| Category | Location |
| ------ | ------ |
| 1. Index Page | views/pages/yield.pug |



### Inheritance
| Category | Location |
| ------ | ------ |
| 1. Basic | views/pages/inheritance.pug |
| 2. Extend | views/pages/inheritance-extend.pug |
| 3. Extend Whitespace | views/pages/inheritance-extend-whitespace.pug |
| 4. Extend Recursive | views/pages/inheritance-extend-recursive.pug |
| 5. Extend Mixins | views/pages/inheritance-extend-mixins.pug |
| 5. Extend Mixins Block | views/pages/inheritance-extend-mixins-block.pug |
| 6. Extend Include | views/pages/inheritance-extend-include.pug |
| 7. Inheritance Defaults | views/pages/inheritance-defaults.pug |
| 8. Inheritance Alert Dialog | views/pages/inheritance-alert-dialog.pug |



### Styles
| Category | Location |
| ------ | ------ |
| 1. Styles | views/pages/styles.pug |



### Scripts
| Category | Location |
| ------ | ------ |
| 1. Scripts | views/pages/scripts.pug |



### HTML5
| Category | Location |
| ------ | ------ |
| 1. Scripts | views/pages/html5.pug |




# Notes:
> Blank lines between tags in HTML are ignored. Basic #3.
> Attributes applied using &attributes are not escaped by default. Attributes #2.
> Regular attributes are escaped by default. Attributes #6.
> Interpolation with = escapes values by default. To not escape use !=
> Interpolation with #{var} escapes values by default.
> Mixins defined after their call do not work. Mixins #3
> Attributes with null/undefined/false values are not rendered. Code #2
> Interpolation with null/undefined values are not rendered. Code #2
> Single period at the beginning of a line does nothing

[Online Pug Conversion](https://pughtml.com/)

Pending:
https://github.com/pugjs/pug/blob/master/packages/pug/test/cases/blocks-in-if.pug
https://github.com/pugjs/pug/blob/master/packages/pug/test/cases/blocks-in-blocks.pug