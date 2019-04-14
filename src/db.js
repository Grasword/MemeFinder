// Initialize Firebase
var config = {
  apiKey: "AIzaSyDPOsDsy279_qZhulgLvGtO4qempaOP-aQ",
  authDomain: "memefinder-f5e33.firebaseapp.com",
  databaseURL: "https://memefinder-f5e33.firebaseio.com",
  projectId: "memefinder-f5e33",
  storageBucket: "memefinder-f5e33.appspot.com",
  messagingSenderId: "808732065991"
};

firebase.initializeApp(config);

export default firebase.firestore();
