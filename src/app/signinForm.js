import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = signInForm['login-email'].value;
  const password = signInForm['login-password'].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
    modal.hide();
    showMessage(`Welcome back ${credentials.user.email}!`);
  } catch (error) {
    console.log(error.message);
    console.log(error.code);
    if (error.code === 'auth/user-not-found') {
      showMessage('User not found', 'error');
    } else if (error.code === 'auth/wrong-password') {
      showMessage('Wrong password', 'error');
    } else if (error.code) {
      showMessage('Something went wrong', 'error');
    }
  }
});
