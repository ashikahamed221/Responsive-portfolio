const firebaseConfig = {
    apiKey: "AIzaSyARpJvJT5ski6-rZwH_esAmsDk59Bld91g",
    authDomain: "contactform-7217a.firebaseapp.com",
    databaseURL: "https://contactform-7217a-default-rtdb.firebaseio.com",
    projectId: "contactform-7217a",
    storageBucket: "contactform-7217a.appspot.com",
    messagingSenderId: "934852611998",
    appId: "1:934852611998:web:d8d4805c71cfe5a26b508f"
  };
  //initialize
  firebase.initializeApp(firebaseConfig);

  //reference
  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit',submitForm);
   
  function submitForm(e){
    e.preventDefault();

    var name = getElementval('name');
    var email = getElementval('email');
    var message = getElementval('message')

    savemessages(name,email,message);
    // alert message

    document.querySelector('.alert').style.display = "block";

    //remove alert

    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    },3000);

    //reset 

    document.getElementById("contactForm").reset();
    
  }
  const savemessages = (name,email,message) => {
      var newcontactForm = contactFormDB.push();
      newcontactForm.set({
        name: name,
        email : email,
        message : message,
      });
  };
  const getElementval = (id) => {
    return document.getElementById(id).value;

  }