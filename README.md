# tailwindcss-grid-extracted

Precompiled flexbox and CSS Grid utility classes extracted from [Tailwind CSS v3](https://v3.tailwindcss.com/docs/flex-basis). Use familiar Tailwind layout class names without installing Tailwind, configuring PostCSS, or shipping the full framework.

This package is aimed at projects that need layout utilities only: design systems with their own tokens, legacy codebases, static sites, or any environment where a complete Tailwind setup is unnecessary overhead.

## Why use this

Tailwind CSS is excellent for rapid layout work, but many projects need only a subset of its utilities. Including the full library adds build tooling, configuration, and CSS surface area you may never use.

This package provides:

- **Flex and grid layout utility classes** compiled to plain CSS
- **Zero runtime dependencies** — the published package contains only CSS files
- **Familiar class names** — identical to Tailwind v3 defaults (`flex`, `grid-cols-3`, `justify-between`, and so on)
- **Modular bundles** — import everything, or only flex or grid utilities

Approximate bundle sizes (unminified, pre-gzip):

| File              | Size   | Contents                                    |
| ----------------- | ------ | ------------------------------------------- |
| `styles/full.css` | ~15 KB | Flex + grid + shared alignment utilities    |
| `styles/flex.css` | ~6 KB  | Flex utilities + shared alignment utilities |
| `styles/grid.css` | ~12 KB | Grid utilities + shared alignment utilities |

## Installation

```bash
npm install tailwindcss-grid-extracted
```

```bash
pnpm add tailwindcss-grid-extracted
```

```bash
yarn add tailwindcss-grid-extracted
```

## Usage

Import one of the CSS bundles into your application. The package entry point (`main`) resolves to the full bundle.

### HTML

```html
<link
  rel="stylesheet"
  href="node_modules/tailwindcss-grid-extracted/styles/full.css"
/>

<link
  rel="stylesheet"
  href="node_modules/tailwindcss-grid-extracted/styles/flex.css"
/>

<link
  rel="stylesheet"
  href="node_modules/tailwindcss-grid-extracted/styles/grid.css"
/>
```

### JavaScript / TypeScript bundlers

Import only what you need:

```js
import "tailwindcss-grid-extracted/full.css";
import "tailwindcss-grid-extracted/flex.css";
import "tailwindcss-grid-extracted/grid.css";
```

### In CSS

```css
@import "tailwindcss-grid-extracted/full.css";
@import "tailwindcss-grid-extracted/flex.css";
@import "tailwindcss-grid-extracted/grid.css";
```

Then use utility classes as you would with Tailwind:

```html
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Main</div>
  <div class="col-span-1">Sidebar</div>
</div>

<div class="flex items-center justify-between gap-2">
  <span>Left</span>
  <span>Right</span>
</div>
```

## Bundles

Three files are published under `styles/`:

### `styles/full.css`

The complete set: flex utilities, grid utilities, and shared layout helpers. Use this when you need both layout modes.

### `styles/flex.css`

Flexbox layout utilities plus shared helpers (gap, justify, align, place, order). Does not include grid-specific classes such as `grid-cols-*` or `col-span-*`.

### `styles/grid.css`

CSS Grid layout utilities plus shared helpers. Does not include flex-specific classes such as `flex-row` or `basis-*`.

## What is not included

This package intentionally covers layout only. The following Tailwind features are **not** provided:

- Responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)
- State variants (`hover:`, `focus:`, `active:`, `disabled:`, and so on)
- Arbitrary values (`grid-cols-[200px]`, `gap-[13px]`)
- Spacing utilities outside of `gap-*` (`p-*`, `m-*`, `space-*`)
- Sizing (`w-*`, `h-*`), typography, colors, borders, shadows, effects, and all other non-layout utilities
- Tailwind configuration, plugins, or `@apply` at consumption time
- Tailwind CSS v4

If you need responsive or variant-based layout utilities, use full Tailwind CSS or extend the generator script in this repository.

## How it works

CSS is generated at publish time by `scripts/generate-css.ts`. The script:

1. Defines an explicit allowlist of Tailwind utility class names
2. Feeds them to Tailwind CSS v3 via PostCSS using a synthetic `@apply` block
3. Writes compiled, standalone CSS to `styles/flex.css`, `styles/grid.css`, and `styles/full.css`

The output is plain CSS with no `@tailwind` directives and no dependency on Tailwind at runtime. Class names and property values are identical to what Tailwind v3 would produce for the same utilities.

To regenerate CSS locally:

```bash
pnpm install
pnpm generate-css
```

CSS is also regenerated automatically before publishing via the `prepublishOnly` script.

## Local development

Clone the repository, then install dependencies from the project root:

```bash
pnpm install
```

Start the visual test page:

```bash
pnpm dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`). The demo page (`index.html`) exercises grid and flex utilities with plain CSS for cell styling, so only classes from the extracted stylesheets affect layout.

To add or remove utilities, edit the class arrays in `scripts/generate-css.ts`, then run `pnpm generate-css`.

## License

MIT — see [LICENSE](LICENSE).

The utility definitions originate from [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss), which is also MIT licensed. This project is not affiliated with or endorsed by Tailwind Labs.

## Author

Erfan Ebrahimnia — [erfan@nextjsweekly.com](mailto:erfan@nextjsweekly.com)
