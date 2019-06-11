<p align="center">
  <img width="706" height="288" src="https://raw.githubusercontent.com/food-nutrients/usda-importer/master/assets/logo.png?raw=true" alt="Food Nutrients logo">
</p>

> Import food data from USDA for the use of food-nutrients project.

> If you are interested in the food-nutrients project visit here

> Live website: <http://usda-importer.github.io>


![Release](https://img.shields.io/github/release/food-nutrients/usda-importer.svg) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/food-nutrients/usda-importer.svg) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/5577ca26a54746038b56c9bddbaa335c)](https://www.codacy.com/app/kolarski/usda-importer?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=food-nutrients/usda-importer&amp;utm_campaign=Badge_Grade)
<a href="https://codeclimate.com/github/food-nutrients/usda-importer/maintainability"><img src="https://api.codeclimate.com/v1/badges/18c12d31d2b2e97d41df/maintainability" /></a>
<a href="https://codeclimate.com/github/food-nutrients/usda-importer/test_coverage"><img src="https://api.codeclimate.com/v1/badges/18c12d31d2b2e97d41df/test_coverage" /></a> ![Dependencies](https://img.shields.io/david/food-nutrients/usda-importer.svg) [![Build Status](https://travis-ci.org/food-nutrients/usda-importer.svg?branch=master)](https://travis-ci.org/food-nutrients/usda-importer)

[![Food Nutrients website](https://raw.githubusercontent.com/usda-importer/usda-importer/master/public/screenshots/screen1.png?raw=true)](http://usda-importer.github.io "Food Nutrients website")

# Setup

```
npm install
tsc
```

# Usage
You can find the usda_id from: https://ndb.nal.usda.gov/ndb/search/list


```
node dist/usda.js [usda_id]
```

### Example Usage for (Turnips, raw): 
```
node dist/usda.js 11564
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
