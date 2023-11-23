import { app as firebase } from './firebase-config.js';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebase);
const provider = new GoogleAuthProvider(auth);

onAuthStateChanged(auth, user => {

    if (user) {
        sessionStorage.setItem('hasAccount', 'true');
    } else {
        sessionStorage.setItem('hasAccount', 'false');
    }

})

const newGameBtn = document.querySelector('button');
newGameBtn.addEventListener('click', async e => {

    e.preventDefault();

    if (sessionStorage.getItem('hasAccount') === 'true') {
        location.href = '/play.html';
    } else {
        signInWithPopup(auth, provider)
        .then(() => {
            console.log('account made!')
            location.href = '/play.html'
        }).catch((err) => {
            console.log(err.message);
        })
    }

})