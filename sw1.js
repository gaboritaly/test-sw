/* self.addEventListener('push', (options) => {
  self.registration.showNotification('Hello world!',options);
});
 */

self.addEventListener('push', (event) => {
  event.waitUntil(
    // Show a notification with title 'ServiceWorker Cookbook' and use the payload
    // as the body.
    self.registration.showNotification('ServiceWorker Cookbook', event.data)
  );
});
