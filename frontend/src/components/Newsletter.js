import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Newsletter.css'

function Newsletter() {
    return (
        <div className='newsletter-container'>
            <section className="newsletter-subscription">
                <p className="newsletter-subscription-heading">
                    Join our Newsletter
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email Address" className="newsletter-input"/>
                        
                    </form>
                    <Button className="newsletter-btn" buttonStyle="btn--outline">Subscribe</Button>
                </div>
            </section>
        </div>
    )
}

export default Newsletter
