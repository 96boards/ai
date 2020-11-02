# 96Boards.ai Static Jekyll Site

This is the git repository for the 96Boards.ai static Jekyll-based website.

Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a PR](https://github.com/96boards/ai/pulls) / [Issue](https://github.com/96boards/ai/issues/new) if there is anything you would like to change.

This static Jekyll site is using the [`jumbo-jekyll-theme`](https://github.com/linaro-marketing/jumbo-jekyll-theme). Please take a moment to review the guides on the [theme's GitHub wiki](https://github.com/linaro-marketing/jumbo-jekyll-theme/wiki).

*****

## Contributing

To make it easier to contribute to the content, Linaro provides a couple of Docker containers for building and checking the site. All you need is Docker installed on your computer and enough RAM and disc space.

To build the site:

```bash
cd <git repository directory>
./build-site.sh
```

To build the site and then serve it so that you can check your contribution appears:

```bash
cd <git repository directory>
JEKYLLACTION="serve" ./build-site.sh
```

To check that your contribution doesn't include any broken links:

```bash
cd <built web site directory>
../check-links.sh
```

The built web site directory will be `production.96boards.ai`. There isn't a staging site any longer as the GitHub build process now automatically generates a preview website.

For more information, please see the [build container wiki](https://github.com/linaro-its/jekyll-build-container/wiki) and the [link checker wiki](https://github.com/linaro-its/jekyll-link-checker/wiki).

*****

## Adding products to the homepage carousel

In order to add products to the homepage carousel you must make a few changes. Firstly, if you are changing the number of elements in the carousel then change the `$n` sass variable (in the /assets/css/app/home-carousel.scss sass partial) to the number of products that the carousel contains. This will ensure that the 3d translations account for `n` number of products.

Add your new image to the carousel in `index.html`. Simply replace the image/add a new one to the figure element.

This is the figure element you will need to add to/amend.

```html
 <figure>
    <img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/images/ultra-96-front-hd.png" id="1" data-url="/products/ultra96/" alt="Ultra96">
    <img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/images/sophon-edge-tpu-board.png" id="2" data-url="https://www.96boards.org/product/sophon-edge/" alt="Sophon Edge">
    <img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/images/rock960_front-resized.png" id="3" data-url="/products/rock960/" alt="Rock960">
    <img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        data-src="/assets/images/hikey970-optimized.png" id="4" data-url="/products/hikey970/" alt="HiKey970">
</figure>
```

Change the image `src`, `alt`, `id` and `data-url` to suit. The ID attribute is used by the carousels javascript to retreive the `data-url` and `alt` attributes. If there are 4 images in the carousel then the first the id's will be 1 - 4.
