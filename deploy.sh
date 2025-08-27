#!/usr/bin/env sh

# abort on errors
set -e

pushd blog
cp -a static/* ../public/
zola build --output-dir ../src/pages/blog --force
popd

sed -i '' 's|blog/sitemap.xml|sitemap.xml|' src/pages/blog/robots.txt

cp src/pages/blog/sitemap.xml public/sitemap.xml

mkdir -p public/blog
cp src/pages/blog/robots.txt public/robots.txt
cp src/pages/blog/*.xml public/blog/

for d in src/pages/blog/tags/*/; do
    if ls "$d"/*.xml >/dev/null 2>&1; then
        mkdir -p "public/blog/tags/$(basename "$d")"
        cp "$d"/*.xml "public/blog/tags/$(basename "$d")/"
    fi
done

# build
npm run build

# navigate into the build output directory
cd dist

# add .nojekyll to bypass GitHub Page's default behavior
touch .nojekyll

# if you are deploying to a custom domain
echo 'www.mariosavarese.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:marsavar/marsavar.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
