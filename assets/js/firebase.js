const myname = 'Your Name';
const myemail = 'yourname@gmail.com';


const firebaseConfig = {
  apiKey: "ApiKey",
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  projectId: "projectId",
  storageBucket: "life-abdussamiakanda.appspot.costorageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId"
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