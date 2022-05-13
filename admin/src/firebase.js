import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD0x8_5eaCkZ6ETN6zlKiJvg0JqwjR-MF8",
    authDomain: "netflix-4bd33.firebaseapp.com",
    projectId: "netflix-4bd33",
    storageBucket: "netflix-4bd33.appspot.com",
    messagingSenderId: "394004730350",
    appId: "1:394004730350:web:dcbaff962a6a77c7307eff",
    measurementId: "G-FZF42VCSND"
  };

firebase.initializeApp(firebaseConfig);
const storage =firebase.storage();

export default storage;
  