import React, {useState} from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const Log = (props) => {

    const [signUpModal, setSignUpModal] = useState(props.signup);
    const [signInModal, setSignInModal] = useState(props.signin);

    //Function permettant de choisir le composant cliqué:
    const handleModale = (event) => {
        if(event.target.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);

        } else if(event.target.id === "login") {
            setSignInModal(true);
            setSignUpModal(false);
        }
    }

    return (
        <div className='connection-form'>
            <div className="form-container">
                <ul>               
                  {/* Injection d'une "classeActive" pour le bouton choisi */}
                    <li onClick={handleModale} 
                        id="register" 
                        className={signUpModal ? "active-btn" : null}

                    > Inscription</li>

                    <li onClick={handleModale} id="login"
                        className={signInModal ? "active-btn" : null}

                    > Connexion</li>                  
                </ul>
                
                <div className="conect">
                    {/* Si "signUpModal" est true
                    tu m'affiche le composant <SignUpForm/> */}
                    {signUpModal && <SignUpForm/> }
                    {signInModal && <SignInForm/> }
                </div>
            </div>
        </div>  
    );
};

export default Log;