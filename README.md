# Angular Shell created to demonstrate workbox-cli working with angular
 
The plan for this project to be the base, varius forks would be created to try out different workbox functionalities in Angular. In short this is the shell program to be used in future personal angular workbox learning projects. 

This is currently deployed [here] (https://happyahluwalia.github.io/workbox_cli_angular/). Its a simple PWA with a quick startup time, service worker, manifest and the whole nine yards.

The service worker is generated using the workbox-cli

# Learnings/Findings - 
Besides the basic usage here are few things found -
- There are certain difference between the workbox-cli 0.0.2 which was used initially. This version generated a workbox-cli-config.json file for future runs.

- The current version of workbox-cli 1.0.0 that is used creates a workbox-cli-config.js

- Another issue that is observed is that generated service worker caches resources at the root context. Please refer to [Issue 560](https://github.com/GoogleChrome/workbox/issues/560).
To work around this issue following was added to the workbox-cli-config.js file 
`
modifyUrlPrefix: {
    '/': ''
  }
  `

# Few prerequisities
- workbox-cli needs to be installed in global scope

- angular-cli-ghpages is required if you would like to deploy on github. Also ensure you have fulfilled other prerequisites like enabling gh-phages as the branch for deployment in github etc. Please refer [ghpages](https://www.npmjs.com/package/angular-cli-ghpages)

- Build : running `npm run postinstall` to build the code, generate servie work and deploy on github pages. Ensure you make change the base-href url in package.json


