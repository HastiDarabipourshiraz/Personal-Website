# Personal Website

Hasti Darabipourshiraz's portfolio website.

## Local development

```sh
npm ci --legacy-peer-deps
npm start
```

## Publishing

Push changes to `main` to build and deploy through GitHub Actions.
GitHub Pages must use **GitHub Actions** as its publishing source.

Custom domain: `hastidarabipourshiraz.com`.
The `public/CNAME` file preserves this domain in production builds.

The site uses hash routes, such as `/#/project` and `/#/publication`.
