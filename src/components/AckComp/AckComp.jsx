import React from 'react';
import './ackComp.css';
const AckComp = () => {
    return (<div className='ack-cards-blcok'>
        <div>
           <div className='text-center pb-4'>
           <i className="bi-check-circle-fill" style={{
                fontSize: "2.5rem",
                color: "#5A4AD1"
            }}></i>
           </div>
            <div className="row">
                <div className='text-center'>
                    <h2> Congratulations, Eren!</h2>
                    <p className="fw-lighter">You have completed onboarding, you can start using the Eden!</p>
                </div>
            </div>
        </div>

    </div>)
}

export default AckComp;