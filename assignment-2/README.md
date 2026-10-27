# Assignment 2 – Static Responsive E-Commerce Front End

**Store name:** COUGAR 

## Reference site
- **Name:** Cougar (Pakistani clothing brand)
- **URL:** https://cougar.com.pk/


COUGAR is *modeled on* Cougar's structure: a black announcement bar, a header with the logo centered and the
nav (Sale / Men / Women / Kids / Accessories) on the left with full-width mega-menus, and two stages of browsing:

1. **Landing screen** – a full-window crossfade of Men / Women / Kids. It does not scroll. Clicking a slide,
   the Men / Women / Kids links, or any nav item opens that category.
2. **Items screen** – the product grid for the chosen category, then the footer.

The brand name, logo and imagery are original placeholders.

## Files
- `index.html` – landing animation **and** the item listings (Sale, Men, Women, Kids, Accessories), each a 8–12 card responsive grid
- `product.html` – single product detail page (large image, name, price, description, size, quantity selector, Add to Cart)
- `css/style.css` – custom styles layered on Bootstrap
- `vendor/` – local copy of Bootstrap 5.3 and Bootstrap Icons
- `images/` – placeholder SVG images
- `screenshots/` – landing, listing and product page at 375px, 768px and 1440px

## How the two screens share one file (no JavaScript)
Each category is a `<section id="men">`, `<section id="women">`, … hidden by default. Links such as
`index.html#men` make that section the CSS `:target`, which shows it and hides the landing animation
(`.listing:target { display:block }`). With no `#category` in the URL only the landing screen is visible.

## Framework
Bootstrap 5.3 does the navbar (`navbar`, `nav-item`, `nav-link`, `dropdown-menu` mega-menus, collapse on phones)
and the layout grid (`row`, `row-cols-2 row-cols-md-3 row-cols-lg-4`, `col-*`, `g-*`). No JavaScript of my own is
used; Bootstrap's bundled JS only powers the phone hamburger menu.

## Responsive behavior
| Width | Layout |
|-------|--------|
| ~375px | Hamburger menu, full-screen landing, 2-column product grid, stacked product page |
| ~768px | 3-column product grid, two-column product page |
| 1200px+ | Full nav with mega-menus, 4-column product grid |

## Run
Open `index.html` in a browser (Google Fonts load from the web; the site falls back to Arial offline).

