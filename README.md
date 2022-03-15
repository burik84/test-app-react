# test-app-react

Create app on React may be with Matherial UI/bootstrap

## Getting Started

To get a local copy of the current code, clone it using git:

```command
git clone git@github.com:burik84/test-app-react.git

cd test-app-react

git checkout develop
```

Next, Node.js. The current version Node ver.16.13.2 LTS. If you have an older version, please install Node.js via the [official package](https://nodejs.org).
You need to install the webpack package
globally (see also [webpack](https://webpack.js.org/guides/getting-started/)):

```command
npm install -g webpack-cli
```

If everything worked out, install all dependencies for RS-lang:

```command
npm install
```

Finally, you need to start a local web server. Run:

```command
npm run serve
```

**Important!** when some changes are made, the page is not always refreshed, so if the page has not refreshed, you must manually refresh the page (for chrome - `F5`).
Local web server will be available at `http://localhost:xxxx/`

## Building

- mode develop `npm run build:dev`
- mode production `npm run build:prod`
- run server `npm run serve`
