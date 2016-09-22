# cf-event-planner

by [@chrisfitkin](http://twitter.com/chrisfitkin)


## BUG: React-addons version icompatibility :(

### Error

> npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
> npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.0.14
> npm WARN react-toolbox@1.2.1 requires a peer of react-addons-css-transition-group@~0.14.0 || ~15.3.0 but none was installed.

### Fix (maybe)
1. Delete node_modules folder
2. Re install node modules with specific verion
  > npm install react
  > npm install --save react-addons-css-transition-group@15.3.0
  > npm install
