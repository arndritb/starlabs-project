import React from "react";
import '../Pages/Contact.css'
import emailjs from 'emailjs-com'
import {Github, Twitter, Facebook } from '../Assets/AllSvgs';
import { Link} from 'react-router-dom';

export const Contact = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            'service_9lfzesi',
            'template_ewc4plw', 
            e.target, 
            'lbamqGfWaG9BaNTkJ').then(res=>{
                console.log(res);
            }).catch(err => console.log(err));
    }

    return(
        <div className="cont">
            <div className="ainer">
                <div>
                    <h1 className="section-header">Contact Me</h1>

                    {/* left contact form */}
                    <div className="contact-wrapper">
                        <form className="form-horizontal" onSubmit={sendEmail}>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input 
                                        className="form-control"
                                        type='text'
                                        name='name' 
                                        placeholder="NAME"
                                        required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input 
                                        className="form-control"
                                        type='email' 
                                        name='user_email'
                                        placeholder="EMAIL"
                                        required />
                                </div>
                            </div>
                            
                            <textarea 
                                className="form-controla"
                                name="message"
                                rows="10"
                                placeholder="MESSAGE"
                                required
                            />
                       

                            <input 
                                className="btn btn-primary send-button"
                                type='submit' 
                                value='SEND' />
                            
                        </form>


                        {/* right contact form */}
                        <div class="direct-contact-container">

                            <ul class="contact-list">
                                <li className="list-item"><span className="contact-text place">Prishtine, Kosove</span></li>
                                <li className="list-item"><span className="contact-text phone"><a href="tel:049796839" title="Give me a call">049-796-839</a></span></li>
                                <li className="list-item"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">arndritb@gmail.com</a></span></li>
                            </ul>

                                <div className="icons">
                                    <Link 
                                        // style={{color:'inherit'}} 
                                        target="_blank" 
                                        to={{pathname:"https://github.com/arndritb"}} >
                                        <Github width={25} height={25} />
                                        
                                    </Link>

                                    <Link 
                                        // style={{color:'inherit'}} 
                                        target="_blank" 
                                        to={{pathname:"https://twitter.com/arndritbaj"}}>
                                        <Twitter width={25} height={25} />
                                    </Link>

                                    <Link 
                                        // style={{color:'inherit'}} 
                                        target="_blank" 
                                        to={{pathname:"https://www.facebook.com/arndrit.b/"}}>
                                        <Facebook width={25} height={25} />
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;