importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBxIBzmS-OmoHWjypbS4Zmb3Db3D47gp_I",
  authDomain: "test-caef8.firebaseapp.com",
  projectId: "test-caef8",
  storageBucket: "test-caef8.firebasestorage.app",
  messagingSenderId: "695127959018",
  appId: "1:695127959018:web:74e412359534b9fa4d3e93",
  measurementId: "G-K8FER8DRHH"
});


const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon-192x192.png",
  });
});
