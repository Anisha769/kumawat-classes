import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js'
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
console.log('hellooooo')
const firebaseConfig = {
  apiKey: "AIzaSyDLmmMrGCu7qoiU6qt0HlAWqsiyVhIzM-M",
  authDomain: "contactform-ddbed.firebaseapp.com",
  databaseURL: "https://contactform-ddbed-default-rtdb.firebaseio.com",
  projectId: "contactform-ddbed",
  storageBucket: "contactform-ddbed.appspot.com",
  messagingSenderId: "1006605943914",
  appId: "1:1006605943914:web:3c394e12d2afc13b623613"
};
// initialize firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('asdasdsd')


//   reference your database
// const contactFormDB = firebase.database().ref("contactForm");
document.getElementById('contacting').addEventListener("submit", submitForm);

function submitForm(e) {
  console.log('avinash')
  e.preventDefault();

  var name = document.getElementById('name').value;
  var number = document.getElementById('number').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  saveMessages(name, number, email, subject, message);
}



const saveMessages = async (name, number, email, subject, message) => {
  console.log("EHHEHHEE",
    name,
    number,
    email,
    subject,
    message)
  const docRef = await addDoc(collection(db, "contact"), {
    name,
    number,
    email,
    subject,
    message
  });
  console.log("Document written with ID: ", docRef.id);
}