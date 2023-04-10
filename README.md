# Browser Extension Template

| ![home](https://user-images.githubusercontent.com/13174025/230798365-c448e8e4-864f-40bd-89e3-7a05f5a2418d.png) | ![about](https://user-images.githubusercontent.com/13174025/230798368-8bb5c4d1-61c1-4f0a-8766-96e1e07d4988.png) | ![settings](https://user-images.githubusercontent.com/13174025/230798370-f04a1ab2-f74c-4bca-8c3e-2838f822f592.png) |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |

<br>

**Table of Contents**

- [Tech stack](#tech-stack)
- [Build](#build)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contributor Covenant Code of Conduct](#contributor-covenant-code-of-conduct)
- [License](#license)

<br>

## Tech stack

### Extension compitability

- [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill)

### State managment

- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [WebExt Redux](https://github.com/tshaddix/webext-redux)
- Side effect: [RxJS](https://rxjs.dev/guide/overview) and [redux-observable](https://redux-observable.js.org/)

### User interface

- Design system: [Chakra UI](https://chakra-ui.com/)
- Icons: [Lucide](https://lucide.dev/)

## Build

1. Clone the repo
2. Ensure you have node, npm installed
3. Run `sh ./build.sh`
4. Raw files will be at `./src/extension/dist/`
5. The zip will be in `./extension-archive.zip`

## Installation

1. Download the `zip` file from the latest release
2. Open `chrome://extensions/`
3. Drop the `zip` file into the page
4. Enjoy :)

## Usage

TODO: Write usage instructions

## Contributing

[Contributing guideline](./CONTRIBUTING.md)

`TL;DR`

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Contributor Covenant Code of Conduct

[Code of Conduct guideline](./CODE_OF_CONDUCT.md)

## License

The MIT License (MIT)

Copyright (c) 2022 Shy Alter

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
