# 96Boards.ai

This repository hosts the code required to generate the 96Boards.ai static website.

# Adding products to the homepage carousel

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
