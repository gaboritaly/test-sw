const webpush = require('web-push');
/* 
 const vapidKeys = webpush.generateVAPIDKeys()
console.log(vapidKeys);  */ 
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BK8Em3Liw6bXxPgJSV5oxigaSDgnTghny2DkJl5lZkiQH1GSswao_gRmioIZbekEh0XZMejEh7cSRjsAnF_e-aY',
  privateKey: '52bwQ0k7nirvgxBfdeYYieA_HuwVAW0X5GMtMFbm4x0'
};

 webpush.setVapidDetails(
  'mailto:gaboritaly@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);



// This is the same output of calling JSON.stringify on a PushSubscription
const notification = JSON.stringify({
  title: "ÚTINFORM forevőr😋",
  options: {
    body: `ID: ${Math.floor(Math.random() * 100)}`,
    icon:'https://www.utinform.hu/assets/logos/mk-logo.svg',
    image:'https://www.utinform.hu/assets/logos/mk-logo.svg',
   
  }
});
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/d2gC4rIV8Og:APA91bF2vXuqBtUt558jFC9LnTHDI3D-o01awWVLqowU1igx605yCc4pdL_nhnXrl_t-eN9Ksm8bH-IMRsL3p1relx--wTD1ZXnG7nqj1V9p4CL-N-cnKywIq44ljwxY4NYvo1ghjRNl","expirationTime":null,"keys":{"p256dh":"BCJKyyjOYaqWkNLMCsscrKR7l-QLf7IBzURtb1FWHW_5OoaAg2XeZ0IxetOW14MNeQlKRDbSgNeHV1OPMlPaMfk","auth":"BmH2kUjprAQTH-AEOZBHQA"}}
webpush.sendNotification(pushSubscription, notification).then((val)=>console.log(val));
