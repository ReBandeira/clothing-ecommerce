import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocAuth } from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/form-input.component";
import { Button } from "../button/button.conponent";
import './sign-up-form.styles.sass';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;  

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit= async (event) => {
        event.preventDefault();  // retira o comportamento padrão do formulário;
        
         // confirmar se as senhas são iguais
        if(password !== confirmPassword) {
            alert('senhas diferentes');
            return ; 
        } 
             // ver se o email e senha do usuario foram autenticados
             // se sim, criar um doc de usuário, do que foi retornado da autenticação; 
        try {
            const response = await createAuthUserWithEmailAndPassword(email, password);
           
            await createUserDocAuth(response.user, {displayName});  
            resetFormFields();        
           
        } catch (error) {
            if(error.code === 'auth/weak-password') {
                alert('A senha deve ter no mínimo 6 caracteres')
            }

            if(error.code === 'auth/email-already-in-use') {
                alert('Email já em uso')
            } else {
                console.log('user creation encountered an error', error)
            }
        }     
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Criar uma conta</h2>
            <span>Entrar com email e senha</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Nome de usuário'
                    type="text" 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName} 
                    required
                />
                    
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

                <FormInput
                    label='Confirme sua senha'
                    type="password" 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    required
                />    

                <Button 
                  
                    type="submit"
                >
                  Entrar
                </Button>
             
            </form>
        </div>
    )
}

export default SignUpForm;