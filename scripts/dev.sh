(sh ./scripts/copy-assets.sh) &
(npm run --prefix src/core dev) &
(npm run --prefix src/extension/background dev) &
(npm run --prefix src/extension/content dev) &
(npm run --prefix src/extension/options dev) &

wait
