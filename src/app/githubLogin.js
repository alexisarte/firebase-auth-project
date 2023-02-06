import { GithubAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';

const githubButton = document.querySelector('#githubLogin');

githubButton.addEventListener('click', async () => {

  const provider = new GithubAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    
    const modal = bootstrap.Modal.getInstance(
      document.querySelector('#signinModal')
    );
    modal.hide();
    
    showMessage(`Welcome back ${credentials.user.displayname}!`);
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
