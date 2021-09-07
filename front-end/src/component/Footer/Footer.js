import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Scrolltop from "../ScrollTotop/Scrolltop";
const Footer=()=>{
    const getYr = () => {
        const options = {
          year: 'numeric',
        }
        return new Date().toLocaleString('en-US', options)
      }
  return(
      <>
    <footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html">
                                <span className="f2">Blog</span>
                                <span className="f1">Scope</span>
                                </a>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#!"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#!"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#!"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-4 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><a href="#!">about</a></li>
                                <li><a href="#!">services</a></li>
                                <li><Link  to="/contactus">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-8 text-center text-lg-center">
                        <div className="copyright-text">
                            <p>Copyright &copy; {getYr()}, All Right Reserved by <a href="https://www.linkedin.com/in/rajbir-banerjee-9ba7721a7/"
                                                                                    >Rajbir</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    
    <Scrolltop/>
  
   
    </>
  )
}
export default Footer;