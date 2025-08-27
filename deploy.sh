#!/usr/bin/env sh

# abort on errors
set -e

pushd blog
cp -a static/* ../public/
zola build --output-dir ../src/pages/blog --force
popd

sed -i '' 's|blog/sitemap.xml|sitemap.xml|' src/pages/blog/robots.txt

cp src/pages/blog/sitemap.xml public/sitemap.xml
cp src/pages/blog/robots.txt public/robots.txt
cp src/pages/blog/atom.xml public/atom.xml

for d in src/pages/blog/tags/*/; do
  if [ -f "$d/atom.xml" ]; then
    mkdir -p "public/tags/$(basename "$d")"
    cp "$d/atom.xml" "public/tags/$(basename "$d")/atom.xml"
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
