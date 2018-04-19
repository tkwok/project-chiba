import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDOP4q1sjJUnE1ei3t9_raEd0g5aN1EiGU",
  authDomain: "goal-coach-2c8bc.firebaseapp.com",
  databaseURL: "https://goal-coach-2c8bc.firebaseio.com",
  projectId: "goal-coach-2c8bc",
  storageBucket: "goal-coach-2c8bc.appspot.com",
  messagingSenderId: "610789741786"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
