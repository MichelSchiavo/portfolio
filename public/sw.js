// Service Worker for PWA functionality and caching
const CACHE_NAME = 'michel-schiavo-portfolio-v1.0.0';
const STATIC_CACHE_URLS = [
  '/',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/og-image.png',
  '/_next/static/css/',
  '/_next/static/js/',
];

const RUNTIME_CACHE = 'runtime-cache-v1.0.0';

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_CACHE_URLS);
      })
      .then(() => {
        return self.skipWaiting();
      }),
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => {
        return self.clients.claim();
      }),
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            // Serve from cache, but also fetch and update cache in background
            fetch(request)
              .then((fetchResponse) => {
                cache.put(request, fetchResponse.clone());
              })
              .catch(() => {});
            return cachedResponse;
          }

          // Not in cache, fetch from network
          return fetch(request)
            .then((fetchResponse) => {
              // Cache successful responses
              if (fetchResponse.status === 200) {
                cache.put(request, fetchResponse.clone());
              }
              return fetchResponse;
            })
            .catch(() => {
              // Fallback to offline page if available
              return caches.match('/offline.html');
            });
        });
      }),
    );
    return;
  }

  // Handle asset requests
  if (
    request.destination === 'image' ||
    request.destination === 'script' ||
    request.destination === 'style'
  ) {
    event.respondWith(
      caches.open(RUNTIME_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(request).then((fetchResponse) => {
            // Cache successful responses
            if (fetchResponse.status === 200) {
              cache.put(request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      }),
    );
  }
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(
      // Handle offline form submissions
      self.registration.sync.register('contact-form-sync'),
    );
  }
});

// Push notifications (placeholder for future implementation)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/apple-touch-icon.png',
      badge: '/favicon-96x96.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey || 1,
      },
      actions: [
        {
          action: 'explore',
          title: 'Ver Portfolio',
          icon: '/favicon-32x32.png',
        },
        {
          action: 'close',
          title: 'Fechar',
          icon: '/favicon-32x32.png',
        },
      ],
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(clients.openWindow('/'));
  }
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_MARK') {
    // Handle performance marks from main thread
    console.log('Performance mark:', event.data.mark);
  }
});

// Error handling
self.addEventListener('error', (event) => {
  console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker unhandled rejection:', event.reason);
});
