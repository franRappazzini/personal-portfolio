# Rappazzini Portfolio

A portfolio built with Next.js and exported as a static site for GitHub Pages.

## Development

Install dependencies and start the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to GitHub Pages

The project is configured for static export. The `deploy` script builds the site
and publishes the `out/` directory to the `gh-pages` branch:

```bash
yarn deploy
```

The GitHub repository must be configured to publish from the `gh-pages` branch
at the root:

1. Open **Settings → Pages** in the GitHub repository.
2. Select **Deploy from a branch**, then choose `gh-pages` and `/ (root)`.
3. Save the settings.

The custom domain is `rappazzini.dev.ar`. Its `CNAME` file is copied into the
published site from `public/CNAME`. To enable it in GitHub, enter
`rappazzini.dev.ar` under **Settings → Pages → Custom domain** and save. At the
domain registrar, point the domain to GitHub Pages by adding these apex A
records:

```text

```

DNS changes may take time to propagate. Once GitHub verifies the domain, enable
**Enforce HTTPS** in the Pages settings.
