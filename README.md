# Personal academic website

Source for [wickstrom.github.io](https://wickstrom.github.io), built with
[Jekyll](https://jekyllrb.com) on the
[AcademicPages](https://github.com/academicpages/academicpages.github.io)
theme (a fork of Minimal Mistakes). Every push to `master` is built and
deployed to GitHub Pages by the workflow in `.github/workflows/jekyll.yml`.

## Editing content

* Biography: `_pages/about.md`
* News items (front page carousel and news page): `_data/news.yml`
* Talks: `_pages/talks.md`
* Teaching: `_pages/teaching.md`
* Images: `images/`

## Running locally

Requires Ruby 3.1 and Bundler:

    bundle install
    bundle exec jekyll serve

Development overrides (localhost URL, expanded CSS):

    bundle exec jekyll serve --config _config.yml,_config.dev.yml
