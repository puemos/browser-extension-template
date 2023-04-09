(cd ../core && npm i -ci && npm run build)

(cd background && npm i ../../core) &
(cd popup && npm i ../../core)

wait
