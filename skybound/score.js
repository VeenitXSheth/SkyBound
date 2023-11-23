import { app as firebase } from './firebase-config.js';
import { getFirestore, doc, setDoc, updateDoc, getDoc, collection } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const auth = getAuth(firebase);
const db = getFirestore(firebase);

onAuthStateChanged(auth, async user => {

    if (user) {
        console.log('hi')
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const dbScore = docSnap.data().highScore;
            const ssScore = sessionStorage.getItem('highScore');
            const newScore = parseInt(ssScore);
            if (dbScore < newScore) {
                await updateDoc(docRef, {
                    highScore: newScore,
                }).then(() => {
                    console.log('score updated!')
                })
            } else {
                console.log('old score was higher!')
            }
        } else {
            const score = parseInt(sessionStorage.getItem('highScore'))
            await setDoc(doc(db, 'users', user.uid), {
                highScore: score,
            }).then(() => {
                console.log('first high score added!')
            })
        }
        const text = document.querySelector('h1');
        const newDocSnap = await getDoc(docRef);
        const scoreToDisplay = newDocSnap.data().highScore;
        const currentScore = parseInt(sessionStorage.getItem('highScore'));
        text.innerHTML = `High Score: ${scoreToDisplay}<br>Last Score: ${currentScore}`;
    } else {
        location.href = '/index.html';
    }

})

const signOutBtn = document.querySelector('button');
signOutBtn.addEventListener('click', () => {

    signOut(auth).then(() => {
        location.href = '/index.html';
    })

})