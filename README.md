# Browser Extension Template

https://user-images.githubusercontent.com/13174025/231552420-6aab9044-3784-4f0f-a681-6009b6222496.mp4

<br>

**Table of Contents**

- [Tech stack](#tech-stack)
- [Architecture](#architecture)
- [Build](#build)
- [Installation](#installation)
- [Contributing](#contributing)
- [Contributor Covenant Code of Conduct](#contributor-covenant-code-of-conduct)
- [License](#license)

<br>

## Tech stack

### User interface

- User interfaces: [React](https://react.dev/)
- Design system: [shadcn/ui](https://ui.shadcn.com/)
- Development: [Storybook](https://storybook.js.org/)
- Icons: [Lucide](https://lucide.dev/)

### Extension

- Compatibility: [WebExtension browser API Polyfill](https://github.com/mozilla/webextension-polyfill)
- Cross-app communication: [WebExt Redux](https://github.com/tshaddix/webext-redux)

### State management

- State Container: [Redux](https://redux.js.org/)
- Tooling: [Redux Toolkit](https://redux-toolkit.js.org/)
- Side effect: [RxJS](https://rxjs.dev/guide/overview) and [redux-observable](https://redux-observable.js.org/)

## Architecture

<img width="50%" src="https://user-images.githubusercontent.com/13174025/230900357-d804ded6-9939-406b-aefd-52abfecdf91e.png" />

### Design system

All the shared UI components

### Core

#### Entities

- Represent your domain object
- Apply only logic that is applicable in general to the whole entity (e.g., validating the format of a hostname)
- Typescript classes
- More examples: [here](https://github.com/puemos/hls-downloader/tree/master/src/core/src/entities)

```ts
import { Key } from "./key";

export class Fragment {
  constructor(
    readonly key: Key,
    readonly uri: string,
    readonly index: number
  ) {}
}
```

#### Use cases

- Represent an isolated single piece of your business actions: it’s what you can do with the application. Expect one use case for each business action
- Pure business logic, plain code (except maybe some utils libraries)
- The use case doesn’t know who triggered it and how the results will be presented.
- More examples: [here](https://github.com/puemos/hls-downloader/tree/master/src/core/src/use-cases)

```ts
import { Fragment } from "../entities";
import { ILoader } from "../services";

export const downloadSingleFactory = (loader: ILoader) => {
  const run = async (
    fragment: Fragment,
    fetchAttempts: number
  ): Promise<ArrayBuffer> => {
    const data = await loader.fetchArrayBuffer(fragment.uri, fetchAttempts);
    return data;
  };
  return run;
};
```

#### Services

- Interfaces of services that will be injected into use-cases
- More examples: [here](https://github.com/puemos/hls-downloader/tree/master/src/core/src/services)

```ts
export interface ILoader {
  fetchText(url: string, attempts?: number): Promise<string>;
  fetchArrayBuffer(url: string, attempts?: number): Promise<ArrayBuffer>;
}
```

#### Controllers

- A chain of use-cases triggered by a redux event
- Written with the help of RxJs
- More examples: [here](https://github.com/puemos/hls-downloader/tree/master/src/core/src/controllers)

```ts
import { Epic } from "redux-observable";
import { of } from "rxjs";
import { filter, map, mergeMap } from "rxjs/operators";
import { RootAction, RootState } from "../adapters/redux/root-reducer";
import { jobsSlice } from "../adapters/redux/slices";
import { Dependencies } from "../services";

export const incDownloadStatusEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Dependencies
> = (action$, store$) =>
  action$.pipe(
    filter(jobsSlice.actions.incDownloadStatus.match),
    map((action) => action.payload.jobId),
    map((id) => ({ id, status: store$.value.jobs.jobsStatus[id] })),
    filter(({ status }) => Boolean(status)),
    filter(({ status }) => status!.done === status!.total),
    mergeMap(({ id }) => {
      return of(
        jobsSlice.actions.finishDownload({
          jobId: id,
        }),
        jobsSlice.actions.saveAs({
          jobId: id,
        })
      );
    })
  );
```

#### Store

WIP

### Apps

#### Background

##### Listeners

- Register listeners for browser events, do some magic, and change your app's shared state (using the core library)
- Add them to `subscribeListeners` in the `index.ts` file
- More examples: [here](https://github.com/puemos/hls-downloader/tree/master/src/extension-background/src/listeners)

```ts
import { tabs } from "webextension-polyfill";
import { createStore } from "@hls-downloader/core/lib/store/configure-store";
import { tabsSlice } from "@hls-downloader/core/lib/store/slices";

export function setTabListener(store: ReturnType<typeof createStore>) {
  tabs.onActivated.addListener(async (details) => {
    store.dispatch(
      tabsSlice.actions.setTab({
        tab: {
          id: details.tabId,
        },
      })
    );
  });
}
```

##### Services

- Implementation of the core's library services
- You can have multiple Implementations for the same services (e.g MemoryFS, IndexedDBFS)
- More examples: [here](https://github.com/puemos/hls-downloader/tree/master/src/extension-background/src/services)

```ts
type FetchFn<Data> = () => Promise<Data>;

async function fetchWithRetry<Data>(
  fetchFn: FetchFn<Data>,
  attempts: number = 1
): Promise<Data> {
  if (attempts < 1) {
    throw new Error("Attempts less then 1");
  }
  let countdown = attempts;
  while (countdown--) {
    try {
      return await fetchFn();
    } catch (e) {
      if (countdown < 1 && countdown < attempts) {
        const retryTime = 100;
        await new Promise((resolve) => setTimeout(resolve, retryTime));
      }
    }
  }
  throw new Error("Fetch error");
}

export async function fetchText(url: string, attempts: number = 1) {
  const fetchFn: FetchFn<string> = () => fetch(url).then((res) => res.text());
  return fetchWithRetry(fetchFn, attempts);
}

export async function fetchArrayBuffer(url: string, attempts: number = 1) {
  const fetchFn: FetchFn<ArrayBuffer> = () =>
    fetch(url).then((res) => res.arrayBuffer());
  return fetchWithRetry(fetchFn, attempts);
}
export const FetchLoader = {
  fetchText,
  fetchArrayBuffer,
};
```

#### Content

The extension's content app.

components - Shared components
modules - Your app's features

```console
src
├── modules
│   ├── About
│   │   ├── AboutController.ts
│   │   ├── AboutModule.tsx
│   │   └── AboutView.tsx
│   ├── Home
│   │   ├── HomeModule.tsx
│   │   ├── HomeView.stories.tsx
│   │   └── HomeView.tsx
│   └── Settings
│      ├── SettingsController.ts
│      ├── SettingsModule.tsx
│      └── SettingsView.tsx
├── index.tsx
├── App.tsx
├── setupTests.ts
└── theme.ts
```

##### Modules

Each module is separated into a controller with business logic, a view with UI only (no logic), and a module that glue them together.

## Scripts

| Script                             | Job                                           |
| ---------------------------------- | --------------------------------------------- |
| `./scripts/build.sh`               | Build all the app and create a zip file.      |
| `./scripts/build-background.sh`    | Build only the extension's background app.    |
| `./scripts/build-design-system.sh` | Build design-system.                          |
| `./scripts/build-content.sh`       | Build only the extension's content app.       |
| `./scripts/build-core.sh`          | Build only the extension's core library.      |
| `./scripts/build-extension.sh`     | Build all the extension's apps.               |
| `./scripts/clean.sh`               | Clean the build dir.                          |
| `./scripts/copy-assets.sh`         | Copy the extension's non-code assets,         |
| `./scripts/dev.sh`                 | Build and watch for changes.                  |
| `./scripts/storybook.sh`           | Run Storybook for the extension's content app |

## Development

### Build

1. Clone the repo
2. Ensure you have node, and npm installed
3. Run `sh ./scripts/build.sh`
4. Raw files will be at `./dist/`
5. The zip will be in `./extension-archive.zip`

### Design

<img width="50%" src="https://user-images.githubusercontent.com/13174025/231569562-4d1cc56e-0f2d-4fec-a2e0-aeb5b3ad45c2.png" />

1. Run `sh ./scripts/storybook.sh`
2. Work on the UI in `src/content`

## Installation

1. Download the `zip` file from the latest release
2. Open `chrome://extensions/`
3. Drop the `zip` file into the page
4. Enjoy :)

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

Copyright (c) 2023 Shy Alter

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
