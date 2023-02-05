import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
import { auth } from './firebase.js';

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('submit');
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  console.log(email, password);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('userCredential', userCredential);

    // close the signup modal & reset form
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();
  } catch (error) {
    console.log(error.message);
    console.log(error.code);
    if (error.code === 'auth/email-already-in-use') {
      alert('Email already in use')
    } else if (error.code === 'auth/invalid-email') {
      alert('invalid email')
    } else if (error.code === 'auth/weak-password') {
      alert('password to weak')
    } else if (error.code) {
      alert('somethind went wrong')
    }
  }
});
