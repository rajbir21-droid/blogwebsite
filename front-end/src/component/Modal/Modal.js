import React,{useRef, useState} from 'react'
import './Modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
const Modal=({setmoda,moda})=>{
    const formRef = useRef();
    const [success,setSuccess]=useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_86ctvjh', 
        'template_3t32d7k', 
        formRef.current, 'QpabEFMEiF4yEqIfc')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
        });
    }
    const modalClose=()=>{
        setSuccess(false);
        setmoda(false);
    }
    return(
        <div className={`modal ${moda ?'modalshow':'modalhide'}`}>
        <div className='modalcontent'>
        <button className='btn1' onClick={modalClose}>&times;</button>
        <h2>Please Leave your message here!!!</h2>
            <form ref={formRef} className="mail" onSubmit={handleSubmit}>
                <label>Email</label>
                <input  type="email" 
                   placeholder="email"
                   name="user_email"
                   required
                />
                <label>Message</label>
                <textarea 
                placeholder="message" 
                 className="textarea"
                 name='message'
                 required
                 />
                 <button className="modalbtn" type="submit"><FontAwesomeIcon className="fa-paper-plane" icon={faPaperPlane}/></button>
            </form>
            {success && "Thank you!!"}
            </div>
        </div>
    )
}
export default Modal;
