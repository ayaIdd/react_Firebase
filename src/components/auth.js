import {auth , googleProvider} from '../config/firebase-config';
import {createUserWithEmailAndPassword ,signInWithPopup,signOut} from 'firebase/auth'
import {useState} from 'react';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const SignIn = async () => {
        try{
      await createUserWithEmailAndPassword(auth,email,password);
        }catch(err)
        {
            console.error(err);
        }
     };

     const SignInWithGoogle = async () => {
        try{
      await signInWithPopup(auth,googleProvider);
        }catch(err)
        {
            console.error(err);
        }
     };   

     const LogOut = async () => {
        try{
      await signOut(auth);
        }catch(err)
        {
            console.error(err);
        }
     };   
     
      
    return (
        <div>
            <input placeholder="Email .." onChange={ (e) => setEmail(e.target.value)}/>
            <input placeholder="password .." onChange={(e)=>setPassword(e.target.value) }type="password"/>

            <button onClick={SignIn} >Sign in </button>
            <button onClick={SignInWithGoogle}> Sign in with google</button>
            <button onClick={LogOut}> logout</button>
            
            
        </div>
    );
};
export default Auth;