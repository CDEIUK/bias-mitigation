/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-39b3ae91d34ba02c626f.js"
  },
  {
    "url": "framework-00076b3ecd056c734fcd.js"
  },
  {
    "url": "styles.00f8b4737e2b2bf266d9.css"
  },
  {
    "url": "styles-794a3f92d26e63fcd402.js"
  },
  {
    "url": "f0e45107-b3fb87956e69fc692194.js"
  },
  {
    "url": "252f366e-0039c2269e1877ca8100.js"
  },
  {
    "url": "app-b9d3abc1467340cc79a0.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8a29d97d67def03d1e942f810e7f5dfc"
  },
  {
    "url": "pace.min.js"
  },
  {
    "url": "pace.css"
  },
  {
    "url": "figure0-7a988367f026543c86ee.js"
  },
  {
    "url": "figure1-4f2889c20a68f586047c.js"
  },
  {
    "url": "figure10-5d81745c0e0c726941e4.js"
  },
  {
    "url": "figure11-88fd28102a0c901d08c9.js"
  },
  {
    "url": "figure12-6a36baa0364b490f3a27.js"
  },
  {
    "url": "figure13-3ef0331f4af586a5c789.js"
  },
  {
    "url": "figure14-aa6ab74a7df789796db5.js"
  },
  {
    "url": "figure15-34ce048d13fc32d3fa51.js"
  },
  {
    "url": "figure16-c825082f39374500b39b.js"
  },
  {
    "url": "figure17-0ee120f4e6570f76a658.js"
  },
  {
    "url": "figure18-3e91f46e0ea379770ced.js"
  },
  {
    "url": "figure19-f655396d29fb58aa81ca.js"
  },
  {
    "url": "figure2-bffb6ae5acea21c77e2d.js"
  },
  {
    "url": "figure20-7bd3e1ab7c1aedb5b447.js"
  },
  {
    "url": "figure21-c572914b1d12260e299a.js"
  },
  {
    "url": "figure22-f2446175118e19adbeef.js"
  },
  {
    "url": "figure23-1fd1e06ead7f699881af.js"
  },
  {
    "url": "figure24-084842504f3db31bd40e.js"
  },
  {
    "url": "figure25-c0f77ec6dcc40a07501b.js"
  },
  {
    "url": "figure26-3ca7b64e254fe69d2fee.js"
  },
  {
    "url": "figure27-068d0e0d92a52310bf35.js"
  },
  {
    "url": "figure28-113eec9000b900128445.js"
  },
  {
    "url": "figure29-ec9271702ef3824b19a4.js"
  },
  {
    "url": "figure3-59661c515f149dbf6b7e.js"
  },
  {
    "url": "figure30-9da6100fd247a4c448a7.js"
  },
  {
    "url": "figure31-9d756f7a0a623a9737d5.js"
  },
  {
    "url": "figure32-18a0ce52f9c27d26b6b8.js"
  },
  {
    "url": "figure33-55ee6303147e06c84fa6.js"
  },
  {
    "url": "figure34-b5366d77e130e86ac5a2.js"
  },
  {
    "url": "figure35-47b2bd27025b529c3825.js"
  },
  {
    "url": "figure36-7c3e47862f3f39d87439.js"
  },
  {
    "url": "figure37-a48bb5d9d0d1678ddfe7.js"
  },
  {
    "url": "figure38-0f497962ad1d28571344.js"
  },
  {
    "url": "figure39-8c5f1359f939c76b3121.js"
  },
  {
    "url": "figure4-5afc6a66264a10158704.js"
  },
  {
    "url": "figure40-9e0d00451e13c3157efa.js"
  },
  {
    "url": "figure41-05f7f1895b4bc6740c1a.js"
  },
  {
    "url": "figure42-26c06ea52cb64d4a46a8.js"
  },
  {
    "url": "figure43-a69e592f5b74b61e44d7.js"
  },
  {
    "url": "figure44-2149ba277bb0092ea200.js"
  },
  {
    "url": "figure45-8781f359c0564d1e68d2.js"
  },
  {
    "url": "figure46-43817fe3b9ffcdca5c19.js"
  },
  {
    "url": "figure47-73720d3307ad2c39fc21.js"
  },
  {
    "url": "figure48-793e4f68afb60f0e53e2.js"
  },
  {
    "url": "figure49-2a907039475116491b08.js"
  },
  {
    "url": "figure5-495d04f51e9175ba6eef.js"
  },
  {
    "url": "figure50-be86134d9a6655d9e2a7.js"
  },
  {
    "url": "figure51-6c3d255f49d39eaf1d5a.js"
  },
  {
    "url": "figure52-546cd1b6c02663defe69.js"
  },
  {
    "url": "figure53-d07d2973fdb341b635dc.js"
  },
  {
    "url": "figure54-4696c2dd1170da94202a.js"
  },
  {
    "url": "figure55-eee53d37338601aa1d07.js"
  },
  {
    "url": "figure56-6661f7a5a09d0d483a66.js"
  },
  {
    "url": "figure6-e0db057dc05d9255bedc.js"
  },
  {
    "url": "figure7-74bc81df78da140aab6f.js"
  },
  {
    "url": "figure8-1982c72f4b6325d811ac.js"
  },
  {
    "url": "figure9-45fd565be38ea2e030ca.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e5cb9e0c77a823b86dc2.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "2b874a9ea986ecde9c95f91fe4226b2e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f0136d20cabe27202c3cdb2bc6281a56"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/cdei-development`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/cdei-development/app-b9d3abc1467340cc79a0.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/cdei-development/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
