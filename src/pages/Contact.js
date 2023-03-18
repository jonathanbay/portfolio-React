import React from 'react';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className='contact'>
                <Navigation />
                <Logo />
                <ContactForm />
                <div className='contact-infos'>
                    <div className='address'>
                        <div className='content'>
                            <h4>adresse</h4>
                            <p>12 rue du code</p>
                            <p>62200 React/mer</p>
                        </div>
                    </div>

                    <div className='phone'>
                        <div className='content'>
                            <h4>téléphone</h4>
                            <CopyToClipboard text="0301020304" className="hover">
                                <p style={{ cursor: "pointer"}} className="clipboard" onClick={() => alert("Numéro de téléphone copié !")}>03 01 02 03 04 </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;