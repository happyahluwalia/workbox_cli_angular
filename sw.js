importScripts('workbox-sw.prod.v0.0.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "index.html",
    "revision": "6cf204a0a953ee40d3fa141b7956f229"
  },
  {
    "url": "inline.57d2da1b2c25fa8b4b09.bundle.js",
    "revision": "ec805a12fa23cc612b6febda9dccc3de"
  },
  {
    "url": "main.0fe8bbd848053a361a01.bundle.js",
    "revision": "e379a678a5d0ced08547a0e39d4dd0c7"
  },
  {
    "url": "polyfills.60187f338ba5b0a175a8.bundle.js",
    "revision": "e9c9878491f71e039235b9d3ace5bb0e"
  },
  {
    "url": "styles.d41d8cd98f00b204e980.bundle.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "vendor.020ca57fbacab669a996.bundle.js",
    "revision": "d4ebb9ddcecff5ba8fcc65b6f228b4d5"
  },
  {
    "url": "workbox-sw.prod.v0.0.2.js",
    "revision": "adecd1be2876458436c6fb61554335ce"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
