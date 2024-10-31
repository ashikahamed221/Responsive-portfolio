
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