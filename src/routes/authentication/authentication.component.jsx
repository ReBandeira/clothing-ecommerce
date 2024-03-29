import { signInWithGooglePopup, createUserDocAuth } from '../../utils/firebase/firebase.utils';
import { SignInForm }  from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import './authentication.styles.sass';

const Authentication = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();        
        const userDocRef = await createUserDocAuth(user);
    }

    return (
        <div className='authentication'>
          
                <SignInForm/>               
                <SignUpForm/>
            
            
        </div>
    )
}

export default Authentication;