// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  // apiKey: "AIzaSyDuZEmPsqyrBOM_yUuqavrW6HMrnU-wVOM",
  // authDomain: "mooli-push-notifications.firebaseapp.com",
  // projectId: "mooli-push-notifications",
  // storageBucket: "mooli-push-notifications.appspot.com",
  // messagingSenderId: "593864435344",
  // appId: "1:593864435344:web:27a2d90c9d0f4078ab5a15",
  // measurementId: "G-P1EL2P413T"


  //   apiKey: "AIzaSyBnDiOdrzCEMkKt2j9WOqkLmCEh1cRW_q0",

  //   authDomain: "ptanywhere-5a803.firebaseapp.com",

  //   projectId: "ptanywhere-5a803",

  //   storageBucket: "ptanywhere-5a803.appspot.com",

  //   messagingSenderId: "332928670446",

  //   appId: "1:332928670446:web:fc8d3e4c9e91c7040e31ff"

  apiKey: "AIzaSyDjEkZZsCkk46MXAatlBvhr34B8x-GeYjQ",
  authDomain: "native-23aff.firebaseapp.com",
  projectId: "native-23aff",
  storageBucket: "native-23aff.appspot.com",
  messagingSenderId: "288825826230",
  appId: "1:288825826230:web:2f95bd73d2062f9c9cbf17",
  measurementId: "G-WME5TZBC6S"

};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});


