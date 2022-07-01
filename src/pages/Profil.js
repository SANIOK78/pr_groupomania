import React from 'react';
import Log from '../components/log/Log'

const Profil = () => {
    return (
        <div className='profil-page'>
           
            <div className="log-baniere">
                <img className="logo1"  src="./images/logo1.png" 
                alt="Logo1 entreprise " />
                <img className="logo2" src="./images/logo2.png" 
                alt="Logo 2 entreprise " />
                <h1>Réseau social d'entreprise</h1>
            </div>
            <div className="log-container">

              {/*Appel depuis page "profil" avec ses 
              props configurées */}
                <Log signin={false} signup={true} />
                
            </div>
                         
        </div>
    );
};

export default Profil;