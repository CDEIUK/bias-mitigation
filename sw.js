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
    "url": "webpack-runtime-3aaccf7938d7e32c7786.js"
  },
  {
    "url": "framework-290a0347a76cdbe3fd5a.js"
  },
  {
    "url": "styles.00f8b4737e2b2bf266d9.css"
  },
  {
    "url": "styles-48d70379b7a931f0bbd4.js"
  },
  {
    "url": "f0e45107-b3fb87956e69fc692194.js"
  },
  {
    "url": "252f366e-0039c2269e1877ca8100.js"
  },
  {
    "url": "app-0672966e63ae1d4a6e65.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "52731f342ef32ac68daf2151abbe25f2"
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
    "url": "figure14-139a077d669e9a0a0ab0.js"
  },
  {
    "url": "figure15-994a338d69e921e76260.js"
  },
  {
    "url": "figure16-68542fb63c1ee7f23947.js"
  },
  {
    "url": "figure17-7dddd2c24aba60845d66.js"
  },
  {
    "url": "figure18-7b9c53d70128ab1e4bf9.js"
  },
  {
    "url": "figure19-572cab9bad63f79b6462.js"
  },
  {
    "url": "figure2-bffb6ae5acea21c77e2d.js"
  },
  {
    "url": "figure20-969119d19976628b8cd7.js"
  },
  {
    "url": "figure21-5a6254c972f91e6b99a1.js"
  },
  {
    "url": "figure22-248fc17a02dd9aa6bf3c.js"
  },
  {
    "url": "figure23-4cadc90bf77ebe64e028.js"
  },
  {
    "url": "figure24-b75cc541c4a45858bdfd.js"
  },
  {
    "url": "figure25-0b02f277f8cc7b94dd22.js"
  },
  {
    "url": "figure26-a04d53f309ee373f4f73.js"
  },
  {
    "url": "figure27-c41cf5028c6dc4529c96.js"
  },
  {
    "url": "figure28-74e3c0916f2dcf4509be.js"
  },
  {
    "url": "figure29-a72d7df37b740ef64c7b.js"
  },
  {
    "url": "figure3-59661c515f149dbf6b7e.js"
  },
  {
    "url": "figure30-625863ad676f10ae850f.js"
  },
  {
    "url": "figure31-2e2032959e650cbe07b4.js"
  },
  {
    "url": "figure32-9e6d0ea56b364eeff7ce.js"
  },
  {
    "url": "figure33-64aa07bbe84766ac1461.js"
  },
  {
    "url": "figure34-8f7abd430bfac2349bd4.js"
  },
  {
    "url": "figure35-b7ecdd7a9d4bedfbce18.js"
  },
  {
    "url": "figure36-797aa7d765d0fa6baced.js"
  },
  {
    "url": "figure37-2beaa6f5759be6a0b15f.js"
  },
  {
    "url": "figure38-f6eb9b58a651cfdb8e08.js"
  },
  {
    "url": "figure39-167abf2c4b765380f553.js"
  },
  {
    "url": "figure4-5afc6a66264a10158704.js"
  },
  {
    "url": "figure40-a2d6b51861501ee87014.js"
  },
  {
    "url": "figure41-8893a60600baf366b7fc.js"
  },
  {
    "url": "figure42-0e14e9557b5131aa6353.js"
  },
  {
    "url": "figure43-d83a3e852e9d4452c826.js"
  },
  {
    "url": "figure44-4f05df4c603d2d33697b.js"
  },
  {
    "url": "figure45-27a1a45d6c8c59400da0.js"
  },
  {
    "url": "figure46-d8836aa4faf60bc13bd0.js"
  },
  {
    "url": "figure47-c0c44f864eea7475ac6c.js"
  },
  {
    "url": "figure48-ce7ee2f6f4c8e0301ba6.js"
  },
  {
    "url": "figure49-a6ebec3a0bec3bcea273.js"
  },
  {
    "url": "figure5-495d04f51e9175ba6eef.js"
  },
  {
    "url": "figure50-ed3dc1313fab204b28fe.js"
  },
  {
    "url": "figure51-e634e2c3aa1aa0185d79.js"
  },
  {
    "url": "figure52-08298dc06a6cce880f93.js"
  },
  {
    "url": "figure53-84a382a2b09ae0dca597.js"
  },
  {
    "url": "figure54-9f11bb072a999f3c3dac.js"
  },
  {
    "url": "figure55-4c0887787546db98c043.js"
  },
  {
    "url": "figure56-0de68576e6c24e443d50.js"
  },
  {
    "url": "figure57-38918f2c53fbeeb5c361.js"
  },
  {
    "url": "figure58-dd675e9a7cb2115e4f12.js"
  },
  {
    "url": "figure59-1b5c1c4028df1896b606.js"
  },
  {
    "url": "figure6-de8d77b4e5f8f768b48e.js"
  },
  {
    "url": "figure60-d8fb78abaa5e278655df.js"
  },
  {
    "url": "figure61-b6b9639f02a7667aed4a.js"
  },
  {
    "url": "figure62-34cdc31badd110f94764.js"
  },
  {
    "url": "figure63-dc18fa4f35119b364c34.js"
  },
  {
    "url": "figure64-6d2be587d5276b50b0f8.js"
  },
  {
    "url": "figure65-fdb942849007968fb389.js"
  },
  {
    "url": "figure66-857749299406f811838f.js"
  },
  {
    "url": "figure7-35952d68ad7332449e4f.js"
  },
  {
    "url": "figure8-2b722980332e572977e0.js"
  },
  {
    "url": "figure9-8fcfcc52e5b9ca2672c0.js"
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
    "revision": "d3e633d7f4832d5c71f889fdcc549e24"
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
  if (!resources || !(await caches.match(`/cdei-development/app-0672966e63ae1d4a6e65.js`))) {
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
