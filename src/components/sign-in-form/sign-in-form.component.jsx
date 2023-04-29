import { useState } from "react";
import { signInAuthWithEmailAndPassword, signInWithGooglePopup, createUserDocAuth , auth} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.conponent";
import './sign-in-form.styles.sass';

const defaultFormFields = {   
    email: '',
    password: '',   
}

const signInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();  
    await createUserDocAuth(user);   
}


export const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;  

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit= async (event) => {
        event.preventDefault();  // retira o comportamento padrão do formulário;
        
         // buscar usuário com email e senha indicado               
        try {
            const response = await signInAuthWithEmailAndPassword(email, password);           
            const userCredential = response.UserCredential; 
            const user = userCredential.user;           

            resetFormFields();        
           
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Senha inválida.')
                    break;
                case 'auth/user-not-found':
                    alert('Email não encontrado') 
                    break;
                default:
                    console.log(error);
            }                   
        }     
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value })
    }


    return (
        <div className="sign-in-container">
            <h2>Já tenho uma conta</h2>
            <span>Entrar com email e senha</span>
            <form onSubmit={handleSubmit}>
               
                <FormInput
                    label='Email'
                    type="email" 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                    required
                />
                
                <FormInput
                    label='Senha'
                    type="password" 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                    required
                />
                <div className="buttons">
                    <Button                   
                        type="submit"
                    >
                    Entrar
                    </Button>

                    <Button
                        buttonType='google'   
                        type='button'                    
                        onClick={signInWithGoogle} 
                    >
                        Entrar com Google
                    </Button>
                </div>                                                  
            </form>
        </div>
    )
};