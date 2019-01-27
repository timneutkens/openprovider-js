# Openprovider.js
![Code Climate](https://img.shields.io/codeclimate/github/timneutkens/openprovider-js.svg) ![Dependencies](https://img.shields.io/david/timneutkens/openprovider-js.svg)
[![Js Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
![Version](https://img.shields.io/npm/v/openprovider.svg) ![License](https://img.shields.io/npm/l/openprovider.svg)


Openprovider api implementation for javascript. Based on [Superagent](https://github.com/visionmedia/superagent) and [Promises (bluebird)](https://github.com/petkaantonov/bluebird)

Uses es2015 / es6 classes. You might need to use [Babel](https://babeljs.io/) if you're using an old version of node.js / in browsers

## Usage

### CLI Usage

`yarn op searchDomainRequest --domainNamePattern %mydomain%`

This is following the pattern:
`yarn op <api command> --arg1 <arg1_value> --arg2 <arg2_value> --argn <argn_value>`

For all available api commands, see: https://doc.openprovider.eu/index.php/Main_Page

### Usage in code

[Example request code here (examples/example.js)](examples/example.js)

## Install

`yarn add openprovider`

## License
MIT
[View here](LICENSE.md)
