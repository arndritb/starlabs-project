import React from "react";
import '../Pages/Contact.css'
import emailjs from 'emailjs-com'

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
                    <h1>Contact Form</h1>
                    <form className="forma" onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type='text' name='name' />

                        <label>Email</label>
                        <input type='email' name='user_email' />

                        <label>Message</label>
                        <textarea name='message' rows='4' />

                        <input type='submit' value='Send' />
                        
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;