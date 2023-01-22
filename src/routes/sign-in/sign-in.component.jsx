import { signInWithGooglePopup, createUserDocAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();        
        const userDocRef = await createUserDocAuth(user);
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}> Sign in with Goole </button>
        </div>
    )
}

export default SignIn;