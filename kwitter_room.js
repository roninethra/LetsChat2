var firebaseConfig = {
  apiKey: "AIzaSyBC2ie2500fKSIfJLOGOv5RyTB17Hotp8c",
  authDomain: "lets-chat-9958b.firebaseapp.com",
  databaseURL: "https://lets-chat-9958b-default-rtdb.firebaseio.com",
  projectId: "lets-chat-9958b",
  storageBucket: "lets-chat-9958b.appspot.com",
  messagingSenderId: "590292191681",
  appId: "1:590292191681:web:115f81a69fbeb0af954740"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function updateuser(){
    var nameofuser= document.getElementById("username").value;
    firebase.database().ref("/").child(nameofuser).update({
        testing: "adding user"
    })

}
function homepage(){
  window.location=("index.html");
}