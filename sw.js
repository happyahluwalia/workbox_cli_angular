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
    "url": "0.0caeb8008ad3e13a976a.chunk.js",
    "revision": "e8fb907610890c96f25a4985cc8e95bc"
  },
  {
    "url": "assets/icons\\android-chrome-192x192.png",
    "revision": "64da5a4808b2f87ae0b586cd5b6ad788"
  },
  {
    "url": "assets/icons\\android-chrome-512x512.png",
    "revision": "04ef6ef91cfeeda196f3db9a076ecad6"
  },
  {
    "url": "assets/icons\\apple-touch-icon-precomposed.png",
    "revision": "4b69c7b8d64998edc30cf4471474bc1f"
  },
  {
    "url": "assets/icons\\apple-touch-icon.png",
    "revision": "be0d780e27355840b44d54c1d7528b87"
  },
  {
    "url": "assets/icons\\favicon-16x16.png",
    "revision": "5eed5ce21008cd26fea4e1aa2b711e24"
  },
  {
    "url": "assets/icons\\favicon-32x32.png",
    "revision": "8322de8efd5fc2b20048b80ef98376d3"
  },
  {
    "url": "assets/icons\\favicon.ico",
    "revision": "f3f70846cad486fc894f0d6145364266"
  },
  {
    "url": "assets/icons\\mstile-150x150.png",
    "revision": "f7c07b1ec08636a47fcf11a0fb782393"
  },
  {
    "url": "assets/icons\\safari-pinned-tab.svg",
    "revision": "39b1a8cf10302a2e0b6715210e67d675"
  },
  {
    "url": "assets/images\\GitHub-Mark-32px.png",
    "revision": "f87561b8bb354ef83b09a66e54f70e08"
  },
  {
    "url": "assets/images\\Twitter_bird_logo_2012.svg.png",
    "revision": "d7b69a177bd779797670e7065b220a4b"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "index.html",
    "revision": "10e58981c481e955aff32a261441e157"
  },
  {
    "url": "inline.998667e3016cc87fd2c9.bundle.js",
    "revision": "f47aae9eac230df6914612d8ecc3b5d2"
  },
  {
    "url": "main.c6a140047da31efa3273.bundle.js",
    "revision": "29d2c915dbd73a5916efcad38680fcf0"
  },
  {
    "url": "manifest.json",
    "revision": "a1ecc711e73f6f7f8b6c584929ebdab0"
  },
  {
    "url": "polyfills.3c94411d2589f8c44aa8.bundle.js",
    "revision": "8d3f502f3898364ee81cb9ce21a97947"
  },
  {
    "url": "styles.d41d8cd98f00b204e980.bundle.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "vendor.70a47a9ba431200a2f3c.bundle.js",
    "revision": "9cadde3d3713569aabd213c6b480f028"
  },
  {
    "url": "workbox-sw.prod.v0.0.2.js",
    "revision": "adecd1be2876458436c6fb61554335ce"
  }
];
const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
