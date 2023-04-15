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
  firebase.initializeApp(firebaseConfig);

//   reference your database
const contactFormDB = firebase.database().ref("contactForm");
document.getElementById('contacting').addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var number = getElementVal('number');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var message = getElementVal('message');

    saveMessages(name,number,email,subject,message);
}



const saveMessages = (name,number,email,subject,message) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        number: number,
        email: email,
        subject: subject,
        message: message,
    });
}