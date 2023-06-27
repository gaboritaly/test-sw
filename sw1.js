/* self.addEventListener('push', (options) => {
  self.registration.showNotification('Hello world!',options);
});
 */

self.addEventListener('push', (event) => {
  console.log(event.data)
  event.waitUntil(
    self.registration.showNotification('Útinform', JSON.parse(event.data))
  );
});
