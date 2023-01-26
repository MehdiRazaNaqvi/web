import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    // apiKey: "AIzaSyAkCeOkjoSmOCeTw7o0E8W8ZXaEoXLQuFM",
    // authDomain: "pt-dev-54ca8.firebaseapp.com",
    // projectId: "pt-dev-54ca8",
    // storageBucket: "pt-dev-54ca8.appspot.com",
    // messagingSenderId: "275186085477",
    // appId: "1:275186085477:web:d4595484312f4b95e8e08c",
    // measurementId: "G-1CY8MBEG2Q"

    // apiKey: "AIzaSyBnDiOdrzCEMkKt2j9WOqkLmCEh1cRW_q0",
    // authDomain: "ptanywhere-5a803.firebaseapp.com",
    // projectId: "ptanywhere-5a803",
    // storageBucket: "ptanywhere-5a803.appspot.com",
    // messagingSenderId: "332928670446",
    // appId: "1:332928670446:web:fc8d3e4c9e91c7040e31ff"


    apiKey: "AIzaSyDjEkZZsCkk46MXAatlBvhr34B8x-GeYjQ",
    authDomain: "native-23aff.firebaseapp.com",
    projectId: "native-23aff",
    storageBucket: "native-23aff.appspot.com",
    messagingSenderId: "288825826230",
    appId: "1:288825826230:web:2f95bd73d2062f9c9cbf17",
    measurementId: "G-WME5TZBC6S"
};


// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);

const messaging = getMessaging();



// export const requestForToken = () => {

//   return getToken(messaging
//     , { vapidKey: "BPzQuqYbyIPirThy1aF0fgyVkkE_UWIkOGJFjwZy7SS1t-hDS2UA1-u2hofdcTcO-T0C5LbkHLJHiraiE3r22gY" }
//   )
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log('current token for client: ', currentToken);
//         return currentToken;
//         // Perform any other neccessary action with the token
//       } else {
//         // Show permission request UI
//         console.log('No registration token available. Request permission to generate one.');
//       }
//     })
//     .catch((err) => {
//       console.log('An error occurred while retrieving token. ', err);
//     });
// };




export const generateToken = () => {

    return getToken(messaging
        , { vapidKey: "BNaJepaDbIE1Tzg2SALVvxjeTNLa7-D7HBrQB5ZENoh_LjETB73em0AWIPUxU87KTwZ8-mBcXEKtdNv3gpMk4jM" }

    )

        .then((currentToken) => {
            if (currentToken) {
                // console.log('current token for client: ', currentToken);
                return currentToken;

                // Perform any other neccessary action with the token
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
            }
        })

        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
        });

};









export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });

