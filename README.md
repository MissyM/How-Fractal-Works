
# How-Fractal-Works

How-Fractal-Works project for Fractal framework, now we use :fire:[FuseBox](https://github.com/fuse-box/fuse-box):fire:! as bundle/loader system, which allows a blazingly fast develelopment and production building

So you are here, this how you can use this repo:

- Download this repo
- uncompress the downloaded file
- open the folder
- be sure you have [Node.js](https://nodejs.org/en/) installed
- open a command window
- type `npm i` and hit enter
- type `npm start` and visit [http://localhost:3000](http://localhost:3000) in your browser
- lets hack it! :heart:

Finally when you have some work done, type `npm run compile` and hit enter and your app should appear at the dist/ folder. This is it.

Follow our [tutorial here](https://github.com/FractalBlocks/Fractal/blob/master/docs/tutorial/readme.md).

## SVG icons bundling included

All icons are in assets/icons and are svg files with dash separated words. If you add some icon you should run `npm run bundle-icons` that use svg-join + svgo to bundle and optimize all icons into assets/icons-bundle.min.svg. Before that, you can use this icons with:

```html
<link rel="stylesheet" type="text/css" href="assets/icons-bundle.css" />
...
<svg class="svg_my-svg-file"><use xlink:href="icons-bundle.min.svg#my-svg-file"></svg>
<svg class="svg_my-svg-file2"><use xlink:href="icons-bundle.min.svg#my-svg-file2"></svg>
```

## Development environment

We strongly recommend [Visual Studio Code](https://code.visualstudio.com/) and use [fractal-vscode-extension](https://marketplace.visualstudio.com/items?itemName=carloslfu.fractal-vscode-extension) that provide many useful code snippets

## Test and coverage included (Broken for now ... Comming soon)

Run `npm test` to run test and coverage tasks, and `npm run test:watch` if you are develping for testing every time you make a change.

In FractalBlocks we love quality for this reason the minimum coverage is 100%, we encourage you to do the same

## Testing (Broken for now ... Comming soon)

We believe in that well crafted apps have good quality and should have 100% coverage. Here some tips for writing good tests:

- Each test should be completely isolated
- Ask you what are you testing?, the test should be focused
- Ask you what is the behaviour? the test should be clear
- Ask you what is the expected result?
- Ask you what is the actual result?
- The test should be useful as documentation
- A failing test should be like a high quiality error report

## E2E testing

We recomend to have e2e tests for each acceptance criteria (of a user story). E2e test always shoul import the module, e.g. `app/index.ts` as a start point. Here some tips:

- The e2e tests always should assert that there are no warning and errors via logs

## Unit testing

We recomend to have unit tests for each component in a file called `componentName.spec.ts`. You should test actions and inputs as you can see in `app/root.spec.ts` example.

## TODOs

- Add e2e test for the unique acceptance criteria
