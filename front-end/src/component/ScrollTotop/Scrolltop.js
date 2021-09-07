
import React,{useEffect,useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './Scrolltop.css'
import Modal from '../Modal/Modal';

function Scrolltop() {
    const showbelow = 500;
    const [moda,setmoda]=useState(false);
    const [show,setShow] = useState(showbelow? false:true)
        
    const scrolltoTop=()=>{
        window[`scrollTo`]({top:0,behavior:'smooth'})
    }
        const handleScroll=()=>{
            if(window.pageYOffset>showbelow){
                if(!show){
                    setShow(true);
                }
            }else{
                if(show){
                    setShow(false);
                }
            }
        };
        useEffect(()=>{
            if(showbelow){
                window.addEventListener(`scroll`,handleScroll);
                return () =>window.removeEventListener(`scroll`,handleScroll);
            }
        });
        return ( 
           <div>
           {show &&(            
            <button className="arrow-up-button btnScrollToTop" 
            onClick={scrolltoTop}
            style={{
                visibility:"visible",
                background:"rgba(106,0,187)",
                color:"#fff"
            }} >
              <FontAwesomeIcon className="faArrowUp" icon={faArrowUp} />
            </button>)}
            <Modal
            setmoda={setmoda}
            moda={moda}
             />
            <button className="modalbutton" type="button" onClick={()=>{setmoda(true)
            }}><FontAwesomeIcon className="faArrowUp" icon={faCommentDots} /></button>
            </div>
     
         );
}
 
export default Scrolltop;