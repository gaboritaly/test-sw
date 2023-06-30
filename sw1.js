/* self.addEventListener('push', (options) => {
  self.registration.showNotification('Hello world!',options);
}); */


self.addEventListener('install', (event) => {
  console.log('NEW service worker is installed')
});

self.addEventListener('activate', (event) => {
  console.log('NEW service worker now is active 😋')
});


self.addEventListener('push', (event) => {
  const data = event.data.json();
  console.log(data)
  event.waitUntil(
    self.registration.showNotification(data.title, data.options )
  );
});