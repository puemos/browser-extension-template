rm -rf dist
mkdir dist

(cp -r ./assets/* ./dist/) &
(sh ./build-popup.sh) &
(sh ./build-background.sh) &

wait