# Cryptominer
## What is cryptominer?
Cryptominer is a simple eth/mon miner  made in nodejs with electron.
## How to use it?
Make you an account on [Coin Imp](https://www.coinimp.com), then clone this repo with the following command:
`git clone https://github.com/OpperDev/cryptominer.git`
then go in the master folder, and type `npm install`
then go in `src/res/js/index.js`
and modify the `miner` const like this:
`const  miner  =  await  CoinImp('<YOUR-PRIVATE-KEY>')`
Then you can build the app with the following command:
`npm run package-<your distrib>`
or basically run the app with the following command:
`npm start`
# License
MIT License

Copyright (c) 2019 OpperDev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
