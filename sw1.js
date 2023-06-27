/* self.addEventListener('push', (options) => {
  self.registration.showNotification('Hello world!',options);
});
 */

self.addEventListener('push', (event) => {
  const data = event.data.json();
  console.log(data)
  event.waitUntil(
    self.registration.showNotification(data.title, data.options )
  );
});
