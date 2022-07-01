import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {

    let navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate('/profil')
        }
    },[])

    return (
        <div>
            Hello depuis composant Accueil !
        </div>
    );
};

export default Home;