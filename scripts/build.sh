(sh ./scripts/clean.sh)
(sh ./scripts/build-core.sh)
(sh ./scripts/build-design-system.sh)
(sh ./scripts/build-extension.sh)
(zip -r extension-archive.zip ./dist/.)
