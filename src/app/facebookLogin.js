import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';

const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', async () => {

  const provider = new FacebookAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    
    const modal = bootstrap.Modal.getInstance(
      document.querySelector('#signinModal')
    );
    modal.hide();
    
    showMessage(`Welcome back ${credentials.user.displayName}!`);
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      showMessage('User not found', 'error');
    } else if (error.code === 'auth/wrong-password') {
      showMessage('Wrong password', 'error');
    } else {
      showMessage('Something went wrong', 'error');
    }
  }
});
