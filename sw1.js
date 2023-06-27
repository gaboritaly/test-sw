/* self.addEventListener('push', (options) => {
  self.registration.showNotification('Hello world!',options);
});
 */

self.addEventListener('push', (event) => {
  event.waitUntil(
    console.log(event.data)
    self.registration.showNotification('Útinform', event.data)
  );
});
