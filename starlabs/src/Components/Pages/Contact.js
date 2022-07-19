import React from "react";
import '../Pages/Contact.css'
import emailjs from 'emailjs-com'
import {Github, Twitter, Facebook } from '../Assets/AllSvgs';


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
                                    <div
                                        onClick={() => {
                                            window.open("https://github.com/arndritb", "_blank")
                                        }}
                                    >
                                        <Github width={25} height={25} />
                                    </div>

                                    <div
                                        onClick={() => {
                                            window.open("https://twitter.com/arndritbaj", "_blank")
                                        }}
                                    >
                                        <Twitter width={25} height={25} />
                                    </div>

                                    <div
                                        onClick={() => {
                                            window.open("https://www.facebook.com/arndrit.b/", "_blank")
                                        }}
                                    >
                                        <Facebook width={25} height={25} />
                                    </div>

                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;