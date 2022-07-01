import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SignInForm = () => {
    //Le State: éléments de connexion:'email' et 'password'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    let navigate = useNavigate();

    //function permettant la comunication avec "backend" (BD)
    const handleLogin = async (e) => {
        e.preventDefault();
      
        try{
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}api/user/login`,
                {
                    email,
                    password
                }
            )
            // console.log(response)
            if(response.data.errors){
              
                setErrors(response.data.errors)
            } else {
                localStorage.setItem("token", `bearer ${response.data.token}`)
                navigate('/')
            }

        } catch(err) {
            console.log(err)
        }
    };

    return (
      
        <form action="" className='form' onSubmit={handleLogin} id="sign-up-form">

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" 
                onChange={(e) => setEmail(e.target.value)}
                //si valeur input change, on la recupere 
                value={email}  
            />
            {/*affichage erreurs de validation formulaire*/}
            {errors.email && <div className="email error">{errors.email}</div>}

            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            {errors.password && <div className="password error">{errors.password}</div>}

            <input type="submit" value="Se connecter" />

        </form>       
    );
};

export default SignInForm;