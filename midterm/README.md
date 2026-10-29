# Midterm Exam Submission

**Student Name:** Minahil Amjad

**Roll Number / Registration Number:** fa24-bcs-053

## Configuration Parameters

- **N (Roll Number Last Digit):** 5
- **BP (Breakpoint):** 992px
- **H (Header Height / Grid Offset):** 24
- **K (Mega Menu Columns):** 4

## Files Changed & Summary of Modifications

### 1. `index.html`

- **Task 1:** Added a "Shop by Category" item in the navbar containing a 4-column mega menu for desktop (≥ 992px) and a `<details>`/`<summary>` accordion for mobile views (< 992px).
- **Task 3:** Added the mini-cart dropdown markup structure under the cart icon container and linked `midterm/script.js` before the closing `</body>` tag.

### 2. `css/style.css`

- **Task 1:** Added CSS rules using `:focus-within` and `:hover` to display the full-width mega-menu panel above all page content with `z-index: 99999` without pushing page content down. Added responsive styling for the mobile `<details>` accordion below BP = 992px.
- **Task 2:** Added CSS Grid layouts for side-by-side fieldsets and left-aligned form labels at ≥ 992px. Implemented `:user-invalid` pseudo-class styling to show red borders and error messages only after user interaction.
- **Task 3:** Added absolute positioning and shadow styling for the mini-cart dropdown panel (`.mini-cart-dropdown`).

### 3. `midterm/checkout.html`

- **Task 2:** Created a standalone checkout page containing two `<fieldset>` elements ("Contact" and "Delivery"). Enforced HTML5 pattern validation for phone numbers (`03XX-XXXXXXX`) and date restrictions (`min="2026-10-29"` to `max="2026-11-03"`, calculated as N = 5 days from the exam date).

### 4. `midterm/script.js`

- **Task 3:** Written in plain JavaScript to dynamically read product information from card DOM elements when clicking "Add to Cart". Managed cart state, updated the badge count, calculated the running total using array operations, rendered the mini-cart dropdown, and enforced the maximum item limit of (5 mod 4) + 2 = 3 per product with "Limit reached" button disabling.

## AI Tools Used

- Google Gemini
