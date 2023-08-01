import React from 'react';
import BizCard from "../Common/BizCard";
import cardsList from "./howToUse.config";
import './howtouse.css';
const HowToUse = () => {
    return <div>
        <div className="row">
            <div className='text-center'>
                <h2> How are you planning to use Eden? </h2>
                <p className="fw-lighter">We'll streamline your setup experience accordingly.</p>
            </div>
        </div>
        <div className='cards-blcok py-5'>
            {cardsList && cardsList.length && cardsList.map((cardObj) => {
                return (
                    <BizCard config={cardObj} />
                )
            })}
        </div>
    </div>
}

export default HowToUse;