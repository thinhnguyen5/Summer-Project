import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subcription">
                <p className="footer-subcription-heading">
                    Join All Time Coffee newsletter to enjoy our best coffee
                </p>
                <p className="footer-subcription-text">
                    You can unsubcribe any time.
                </p>
                <div className="input areas">
                    <form>
                        <input type='email' name='email' placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to ='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Video</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>FaceBook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                            All Time Coffee <i class="fas fa-coffee"></i>
                        </Link>
                    </div>
                    <small className='website-rights'>ATC 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" 
                        to="/"
                        target='_blank'
                        aria-label='Facebook'>
                             <i class='fab fa-facebook-f' />
                        </Link>
                        <Link class='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'>
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link class='social-icon-link youtube'
                         to='/'
                        target='_blank'
                        aria-label='Youtube'>
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'>
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'>
                            <i class='fab fa-linkedin' />
                         </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
