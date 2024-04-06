import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/shared/Navbar";


const Landing = () => {
    const navbarRef = useRef(null);
 
    useEffect(() => {
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
   
    }, []);
    return (
        <>
            <Navbar navbarRef={navbarRef} />
            
        </>
    );
};

export default Landing;
