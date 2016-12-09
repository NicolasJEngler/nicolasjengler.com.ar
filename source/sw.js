// Install the Service worker for the first time
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('nicolasjengler-sw').then(function(cache) {
      // And add resources to it
      return cache.addAll([
        './',
        'images/bg.jpg',
        'images/hi.jpg',
        'images/social/behance.svg',
        'images/social/codepen.svg',
        'images/social/dribbble.svg',
        'images/social/github.svg',
        'images/social/linkedin.svg',
        'images/social/twitter.svg',
        'images/particles/arrow.svg',
        'images/particles/circle.svg',
        'images/particles/cross.svg',
        'images/particles/square.svg',
        'images/particles/triangle.svg',
        'scripts/vendor/jquery.parallaxify.min.js',
        'scripts/vendor/jquery-1.12.2.min.js',
        'stylesheets/all.css',
        'stylesheets/media-queries.css',
        'stylesheets/normalize.css',
        'favicon.ico',
        'favicon.png'
      ]);
    })
  );
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  event.respondWith(
    // First we look for something in the caches that
    // matches the request
    caches.match(event.request).then(function(response) {
      // If we get something, we return it, otherwise
      // it's null, and we'll pass the request to
      // fetch, which will use the network.
      return response || fetch(event.request);
    })
  );
});