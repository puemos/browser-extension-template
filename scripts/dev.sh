(sh ./scripts/copy-assets.sh) &
(npm run --prefix src/core dev) &
(npm run --prefix src/extension/popup dev) &
(npm run --prefix src/extension/background dev) &

wait
