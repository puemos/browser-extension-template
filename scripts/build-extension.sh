(sh ./scripts/copy-assets.sh) &
(sh ./scripts/build-background.sh) &
(sh ./scripts/build-options.sh) &
(sh ./scripts/build-content.sh) &

wait
