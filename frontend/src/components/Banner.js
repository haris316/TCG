import React from 'react'
import { Button } from './Button'
import './Banner.css';

function Banner() {
    return (
        <div className='banner-container'>
            <div className="banner-box">
                <div className='banner-content'>
                    <h3>Dungeons & Dragons</h3>
                    <h2>Adventures in the Forgotten Realms</h2>            
                    <div className="banner-btns">
                        <Button to='/shop' className='btns' buttonStyle='btn--outline' buttonSize='btn--medium'>
                             Read Now 
                        </Button>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Banner
