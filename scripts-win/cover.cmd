
rimraf coverage && rimraf .nyc_output

nyc --reporter=html npm run test

mkdir -p coverage_archive/$npm_package_version
cp -r coverage/* coverage_archive/$npm_package_version

npm-run-all --parallel cover:serve cover:open