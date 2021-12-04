
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBoxtLFBGxlSsPsw2OPs91kcjuEYFyPrSg",
      authDomain: "chat-778ad.firebaseapp.com",
      projectId: "chat-778ad",
      storageBucket: "chat-778ad.appspot.com",
      messagingSenderId: "329056693086",
      appId: "1:329056693086:web:74c055bdc6fcffc081bdcf"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
