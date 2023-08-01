import React from 'react';
import "./bizCard.css";

const BizCard = (props) => {
    const { config:{icon,title,desc} } = props;
    return <div className="card how-to-use">
        <div className="card-body">
            <i className={`bi ${icon}`} style={{
                fontSize: "1.5rem",
                color: "#5A4AD1"
            }}></i>
            <div className='py-3'>
                <h6 className="card-title mb-2">{title}</h6>
                <p className="card-text fw-lighter">{desc}</p>
            </div>
        </div>
    </div>
}

export default BizCard;