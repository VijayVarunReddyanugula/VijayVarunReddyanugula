import React from 'react';

const WelcomeComp = () => {
    return <div>
        <div className="row">
            <div className='text-center'>
                <h2> Welcome! First things first... </h2>
                <p className="fw-lighter">You can always change them later.</p>
            </div>
            <form className='pt-4'>
                <div className="mx-auto col-10 col-md-8 col-lg-6 px-2">
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input type="email" className="form-control" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Display Name</label>
                        <input type="email" className="form-control" placeholder="Display Name" />
                    </div>
                </div>
            </form>
        </div>
    </div>
}

export default WelcomeComp;
