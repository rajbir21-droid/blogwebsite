import React,{useState} from 'react'
import './Modal.css'
import { axiosInstance } from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const Modal=({setmoda,moda})=>{
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError(false);
        if(email==="" || message===""){
            setSuccess(false);
            setError(true);
        }
        try{
            const res = await axiosInstance.post("/addname",{
                email,
                message
            });
            res.data && setSuccess(true);
        }catch(err){
            setSuccess(false);
            setError(true);
            console.log("kuch toh garbar hain");
        }
    }
    const modalClose=()=>{
        setError(false);
        setSuccess(false);
        setmoda(false);
    }
    return(
        <div className={`modal ${moda ?'modalshow':'modalhide'}`}>
        <div className='modalcontent'>
        <button className='btn1' onClick={modalClose}>&times;</button>
        <h2>Please Leave your message here!!!</h2>
            <form className="mail" onSubmit={handleSubmit}>
                <label>Email</label>
                <input  type="email" 
                   placeholder="email"
                   onChange={(e)=> setEmail(e.target.value)}
                   required
                />
                <label>Message</label>
                <textarea 
                placeholder="message" 
                 className="textarea"
                 onChange={(e)=>setMessage(e.target.value)}
                 required
                 />
                 <button className="modalbtn" type="submit"><FontAwesomeIcon className="fa-paper-plane" icon={faPaperPlane}/></button>
            </form>
            {success && <span 
            style={{color:"green", marginTop:"10px"}}>
            Successfully send !!!</span>}
            {error && <span style={{color:"red", marginTop:"10px"}}>
            Something went wrong!</span>}
            </div>
        </div>
    )
}
export default Modal;
