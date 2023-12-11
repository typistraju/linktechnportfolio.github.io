import React from "react";


const Footer = () => {
    const year = new Date ().getFullYear ();
   
    return (
        <>
         <footer className="wd-100 bg-light text-center">
          <p>  LinkTechn. All Rights Reserved / Terms and Conditions </p>
        <p> Copyright ©  {year} </p>
        </footer>
         </>
    );
};

export default Footer;