# GP Mandarin Player

## What this repo is for
This is being used to deploy the static page used as the source for the iframe for the GP Mandarin online SWS. The videos are hosted on Cloudflare so this deploys a simple HTML page with the Cloudflare stream player and then sets a start time for the video based on the query parameters. There are two relevant query parameters:
- `src` is the video id for the Cloudflare stream video e.g. something along the lines of 79f1748aa5ece47abb8cfe4911168a01
- `startTimestamp` is the epoch timestamp (in seconds) for the start of the video. The Javascript will then compare that starting timestamp to the current time based on `Date.now()` to choose where to start the video from.

The page is currently deployed to https://yubodiwu.github.io/gp-vjs-pages.

## Generating the iframe to embed
You can generate the `iframe` to be used by online church by going to [the iframe generating tool](https://yubodiwu.github.io/gp-sws-iframe-generator/) and selecting a video id, date, and time, and then clicking "GENERATE IFRAME". The tool will then give you an iframe you can copy and paste into online church.

## Deployment
This repo uses the npm package `gh-pages` to do deploys. In order to deploy, just do:
```sh
npm i
npm run deploy
```

If you want to develop locally, instead do:
```sh
npm i
npm run start
```
and then go to localhost:3000
