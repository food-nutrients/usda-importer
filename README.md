<p align="center">
  <img width="706" height="288" src="https://raw.githubusercontent.com/food-nutrients/usda-importer/master/assets/logo.png?raw=true" alt="Food Nutrients logo">
</p>

> Import food data from USDA for the use of food-nutrients project.

![Release](https://img.shields.io/github/release/food-nutrients/usda-importer.svg) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/food-nutrients/usda-importer.svg) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/5577ca26a54746038b56c9bddbaa335c)](https://www.codacy.com/app/kolarski/usda-importer?utm_source=github.com&utm_medium=referral&utm_content=food-nutrients/usda-importer&utm_campaign=Badge_Grade)
<a href="https://codeclimate.com/github/food-nutrients/usda-importer/maintainability"><img src="https://api.codeclimate.com/v1/badges/18c12d31d2b2e97d41df/maintainability" /></a>
<a href="https://codeclimate.com/github/food-nutrients/usda-importer/test_coverage"><img src="https://api.codeclimate.com/v1/badges/18c12d31d2b2e97d41df/test_coverage" /></a> [![Build Status](https://travis-ci.org/food-nutrients/usda-importer.svg?branch=master)](https://travis-ci.org/food-nutrients/usda-importer)

Live website: <http://food-nutrients.github.io>

## Setup

```bash
yarn install
tsc
```

## Usage

You can find the usda_id from: <https://ndb.nal.usda.gov/ndb/search/list>

```bash
node dist/app.js -f [usda_id]
```

### Example Usage for (Turnips, raw)

```bash
node dist/app.js -f 11564
```

### You can check the help menu

```bash
node dist/app.js --help
```

```
Usage:
  usda_import [OPTIONS] [ARGS]

Options:
  -f, --foodId NUMBER    USDA Food ID to retrive
  -q, --query STRING     Get a list of Foods by search query
  -k, --no-color         Omit color from output
      --debug            Show debug information
  -c, --catch            Catch unanticipated errors
  -v, --version          Display the current version
  -h, --help             Display help and usage details
```

## Contribution

Feel free to add suggestions, PRs, comments and bug reports.

## Authors

Alex Kolarski (aleks.rk@gmail.com)
Boris Minev (boriss.minev@gmail.com)

## License

(The MIT License)

Copyright (c) 2019

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
