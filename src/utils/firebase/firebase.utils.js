import { initializeApp,  } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { 
    getFirestore,
    doc, // metódo para pegar uma instancia de document
    getDoc, //para acessar os dados dessas instancias
    setDoc // para manipular os dados dessas instancias
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDO8h6rCRrMyIwbakaBdGBIPbrAHn0b_Us",
    authDomain: "clothing-ecommerce-db-a9014.firebaseapp.com",
    projectId: "clothing-ecommerce-db-a9014",
    storageBucket: "clothing-ecommerce-db-a9014.appspot.com",
    messagingSenderId: "441242528048",
    appId: "1:441242528048:web:c0dcb2e480ea1f0b1180f5"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // cria uma nova instância google
  const provider = new GoogleAuthProvider();
  // parametros para que sempre que alguém interaja com a instância, precise selecionar uma conta
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();

// função que passa para o método de logar com popup os parâmetros provedor da instância criada e e a funçõa de gautenticação
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  // metodo para instaciar o db faristore e poder uusar essa instancia local
  export const db = getFirestore();

  export const createUserDocAuth = async (userAuth, additionalInfo) => {
    
    const userDocRef = doc(db, 'users', userAuth.uid);

  //conferir se o user existe
    const userSnapshot = await getDoc(userDocRef);
    
    //se não exitir, cai nesse blco onde será criado um usuário

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signInAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
  }

  