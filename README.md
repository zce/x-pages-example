# x-pages-example

[![Build Status][travis-image]][travis-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> Always a pleasure scaffolding your awesome static sites.

## Getting Started

```shell
# clone repo
$ git clone https://github.com/zce/x-pages-example.git my-pages
$ cd my-pages
# install deps
$ yarn # or npm install
```

## Usage

```shell
$ yarn <task> [options]
```

### e.g.

```shell
$ yarn serve --port 5210 --open
$ yarn build --production
```

## All Tasks

### lint

Lint styles & scripts files.

### compile

Compile styles & scripts & pages file.

### serve

Running an automated development server.

#### options

- `port`: Server port, Default: `2080`
- `open`: Automatically open browser, Default: `true`

### build

Build the entire project to get releasable files.

#### options

- `production`: Production mode, Default: `false`
- `prod`: Alias to `production`

### start

Running projects in production mode.

#### options

- `port`: Server port, Default: `2080`
- `open`: Automatically open browser, Default: `false`

### deploy

Deploy build results to [GitHub Pages](https://pages.github.com).

#### options

- `branch`: The name of the branch you'll be pushing to, Default: `'gh-pages'`

### clean

Clean dist & temp files.

## Folder Structure

```
└── my-pages ········································· proj root
   ├─ public ········································· static dir
   │  └─ favicon.ico ································· static file (unprocessed)
   ├─ src ············································ source dir
   │  ├─ assets ······································ assets dir
   │  │  ├─ fonts ···································· fonts dir
   │  │  │  └─ pages.ttf ····························· font file (imagemin)
   │  │  ├─ images ··································· images dir
   │  │  │  └─ logo.png ······························ image file (imagemin)
   │  │  ├─ scripts ·································· scripts dir
   │  │  │  └─ main.js ······························· script file (babel / uglify)
   │  │  └─ styles ··································· styles dir
   │  │     ├─ _variables.scss ······················· partial sass file (dont output)
   │  │     └─ main.scss ····························· entry scss file (scss / postcss)
   │  ├─ layouts ····································· layouts dir
   │  │  └─ basic.html ······························· layout file (dont output)
   │  ├─ partials ···································· partials dir
   │  │  ├─ footer.html ······························ partial file (dont output)
   │  │  └─ header.html ······························ partial file (dont output)
   │  ├─ about.html ·································· page file (use layout & partials)
   │  └─ index.html ·································· page file (use layout & partials)
   ├─ .csscomb.json ·································· csscomb config file
   ├─ .editorconfig ·································· editor config file
   ├─ .gitignore ····································· git ignore file
   ├─ .travis.yml ···································· travis ci config file
   ├─ CHANGELOG.md ··································· repo changelog
   ├─ LICENSE ········································ repo license
   ├─ README.md ······································ repo readme
   ├─ gulpfile.js ···································· gulp tasks file
   ├─ package.json ··································· package file
   └─ yarn.lock ······································ yarn lock file
```

## Related

- [zce/x-pages](https://github.com/zce/pages-tasks) - A preset static pages project gulp tasks.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me)



[travis-image]: https://travis-ci.org/zce/x-pages-example.svg?branch=extract
[travis-url]: https://travis-ci.org/zce/x-pages-example
[license-image]: https://img.shields.io/github/license/zce/x-pages-example.svg
[license-url]: https://github.com/zce/x-pages-example/blob/extract/LICENSE
[dependency-image]: https://img.shields.io/david/zce/x-pages-example.svg
[dependency-url]: https://david-dm.org/zce/x-pages-example
[devdependency-image]: https://img.shields.io/david/dev/zce/x-pages-example.svg
[devdependency-url]: https://david-dm.org/zce/x-pages-example?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
