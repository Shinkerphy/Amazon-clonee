import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        // eslint-disable-next-line
        <div className="footer">
            <div className="footer__home">
                <span className="footer__backToTop"><a href="#">Back to top</a></span>   
            </div>

            <div className="footer__content">
            <div className="footer__section about">
                <h4>Get to Know Us</h4>
                <h5>Careers</h5>
                <h5>About Us</h5>
                <h5>Uk Modern Slavery Statement</h5>
            </div>
            <div className="footer__section money">
                <h4>Make Money with Us</h4>
                <h5>Sell on Amazon</h5>
                <h5>Sell under Private Brands</h5>
                <h5>Sell on Amazon Bussiness</h5>
                <h5>Associate Program</h5>
                <h5>Fulfilment by Amazon</h5>
                <h5>Advertise on Products</h5> 
                <h5>Amazon Pay</h5>
                <h5>Host an Amazon Hub</h5>
            </div>
            <div className="footer__section payment-method">
                <h4>Amazon Payment Methods</h4>
                <h5>Amazon Platinum Mastercard</h5>
                <h5>Amazon Classic Mastercard</h5>
                <h5>Amazon Money store</h5>
                <h5>Gift Crads</h5>
                <h5>Payment Methods Help</h5>
                <h5>Top up your Account</h5>
            </div>
            <div className="footer__section help">
                <h4>Let Us Help You</h4>
                <h5>COVID-19 and Amazon</h5>
                <h5>Rrack Packages or View Orders</h5>
                <h5>Amazon Prime</h5>
                <h5>Returns and Replacement</h5>
                <h5>Amazon Assistant</h5>
                <h5>Customer Service</h5>
            </div>
            </div>

            <div className="footer__country">
                <div className="footer__back">
                <Link to="/">
                 <img 
                 className="footer__logo"
                 src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                 alt=""
                />
                </Link>
                <div className="footer_countryNames">
                    <div className="footer__countryName"><p>Australia</p></div>
                   
                   <div className="footer__countryName"> <p>Brasil</p></div>
                  
                   <div className="footer__countryName"><p>Canada</p></div>
                   
                   <div className="footer__countryName"><p>China</p></div>
                   
                   <div className="footer__countryName"><p>France</p></div>
                   
                   <div className="footer__countryName"> <p>Germany</p></div>
                  
                   <div className="footer__countryName"><p>India</p></div>
                   
                   <div className="footer__countryName"><p>Italy</p></div>
                  
                   <div className="footer__countryName"><p>Singapore</p></div>
                   
                   <div className="footer__countryName"> <p>Spain</p></div>  
                   
                   <div className="footer__countryName"><p>United States</p></div>
  
                   <div className="footer__countryName"><p>United Kingdom</p></div>
                   
                </div>
                </div>
                
            </div>

            <div className="footer__bottom">
                Designed by Abdulmalik! - No Rights Reserved Privacy. Terms . Amazon
            </div>
            
        </div>
    )
}

export default Footer
