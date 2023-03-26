const myname = 'Sabera';
const myemail = 'fermionku@gmail.com';


const firebaseConfig = {
  apiKey: "AIzaSyD2FLUPlMF4tVFBPtIea1AUzM6RgWeaZ1o",
  authDomain: "life-abdussamiakanda.firebaseapp.com",
  databaseURL: "https://life-abdussamiakanda-default-rtdb.firebaseio.com",
  projectId: "life-abdussamiakanda",
  storageBucket: "life-abdussamiakanda.appspot.com",
  messagingSenderId: "699844726358",
  appId: "1:699844726358:web:98bb59195a9e33354bf5f7",
  measurementId: "G-S411V27PLT"
};
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function checkAuthState() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userdata = user;
      verifyUser(user);
    }
  });
}

function GoogleLogin() {
  firebase.auth().signInWithPopup(provider).then(res=>{
    verifyUser(user);
  }).catch((e)=>{})
}

function verifyUser(user) {
  if (user.email === myemail) {
    document.title = 'Logs of ' + myname;
    startWorking(user);
  } else {
    deleteEmail();
  }
}

function deleteEmail() {
  const user = firebase.auth().currentUser;
  user
    .delete()
    .then(() => {})
    .catch((error) => {});
  GoogleLogout();
  window.location.href = "../";
}

function GoogleLogout() {
  firebase
    .auth()
    .signOut()
    .then(() => {})
    .catch((e) => {
      console.log(e);
    });
    showThings('login');
    document.title = myname;
    document.getElementById('top').innerHTML = '';
}

checkAuthState();