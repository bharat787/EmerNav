import * as firebase from 'firebase';

const firebaseConfig = {
    
        apiKey: "AIzaSyBbxuqU9T8Oe3veZodCHmkTZsz5cIP-nEs",
        authDomain: "pheonixemernav.firebaseapp.com",
        databaseURL: "https://pheonixemernav.firebaseio.com",
        projectId: "pheonixemernav",
        storageBucket: "pheonixemernav.appspot.com",
        messagingSenderId: "801352089622",
        appId: "1:801352089622:web:e891fd47104bd975613537",
        measurementId: "G-W75SFNK97E"
      
};

firebase.initializeApp(firebaseConfig);

export default firebase;