$(document).ready(function () {
  var config = {
    apiKey: "AIzaSyCbxahWfgscqSEqfDxWc15XsDJllYZDjiE",
    authDomain: "sodimac-f554c.firebaseapp.com",
    databaseURL: "https://sodimac-f554c.firebaseio.com",
    projectId: "sodimac-f554c",
    storageBucket: "sodimac-f554c.appspot.com",
    messagingSenderId: "463053982377"
  };
  firebase.initializeApp(config);
  $('.modal').modal();
  var passwordLogin = $('.password-login');
  var emailLogin = $('.email-login');
  var emailRegister = $('.email-register');
  var passwordRegisterNew = $('.password-register');
  var nameRegisterNew = $('.name-register');
  var validatePassword = false;
  var validateEmail = false;
  var validateName = false;
  emailRegister.on('keyup', function (event) {
    var EMAILUSER = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (EMAILUSER.test($(this).val())) {
      validateEmail = true;
      validateRegister();
    } else {
      inactiveRegister();
    }
  });
  passwordRegisterNew.on('keyup', function (event) {
    if (passwordRegisterNew.val()) {
      validatePassword = true;
      validateRegister();
    } else {
      inactiveRegister();
    }
  });
  nameRegisterNew.on('keyup', function (event) {
    if (nameRegisterNew.val()) {
      validateName = true;
      validateRegister();
    } else {
      inactiveRegister();
    }
  });
  emailLogin.on('keyup', function (event) {
    var EMAILUSER = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (EMAILUSER.test($(this).val())) {
      validateEmail = true;
      validateUser();
    } else {
      inactiveUser();
    }
  });
  passwordLogin.on('keyup', function (event) {
    if (passwordLogin.val()) {
      validatePassword = true;
      validateUser();
    } else {
      inactiveUser();
    }
  });

  function validateUser() {
    if (validateEmail && validatePassword) {
      $('.btn-login').attr('disabled', false);
    }
  }

  function validateRegister() {
    if (validateEmail && validatePassword && validateName) {
      $('.btn-register').attr('disabled', false);
    }
  }

  function inactiveRegister() {
    $('.btn-register').attr('disabled', 'disabled');
  }

  function inactiveUser() {
    $('.btn-login').attr('disabled', 'disabled');
  }
  $('.btn-register').click(function () {
    firebase.auth().createUserWithEmailAndPassword(emailRegister.val(), passwordRegisterNew.val())
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });

    firebase.auth().onAuthStateChanged(function (user) {
      var userNew = nameRegisterNew.val();
      if (user) {
        // Ingresando datos en la base de datos
        firebase.database().ref('users/' + user.uid).set({
          name: userNew,
          email: user.email,
          uid: user.uid,
          profilePhoto: 'https://firebasestorage.googleapis.com/v0/b/blockbuster-9291e.appspot.com/o/user.png?alt=media&token=60f2aa30-20e5-4f8b-bbb0-81c61fa98ca2',
        }).then(user => {
          console.log('Usuario Registrado');
        });
      }
    });
  });
  // Autentificación por email y password
  $('.btn-login').click(function (event) {
    event.preventDefault();
    var email = emailLogin.val();
    var password = passwordLogin.val();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.

        var errorCode = error.code;
        var errorMessage = error.message;
      });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        window.location.href = './views/sist.c.in.html';
      }
    });
  });

  function observer() {
    firebase.auth().onAuthStateChanged(function (user) {
      var nombreD = $('.nombreD');
      var photoU = $('.photoU');
      if (user) {
        console.log('usuario activo');
        var displayName = user.displayName;
        localStorage.displayName = user.displayName;
        var email = user.email;
        console.log(email);
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        console.log(photoURL);
        localStorage.photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        nombreD.text(displayName);
        photoU.attr('src', photoURL);
      } else {
        console.log('no existe usuario activo');
      }
    });
  }
  observer();
});
