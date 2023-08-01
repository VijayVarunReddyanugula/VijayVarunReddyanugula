import React from 'react';
const WorkSpace = () => {
    return (<div>
        <div className="row">
            <div className='text-center'>
                <h2>Let's set up a home for all your work</h2>
                <p className="fw-lighter">You can always create another workspace later.</p>
            </div>
            <form className='pt-4'>
                <div className="mx-auto col-10 col-md-8 col-lg-6 px-2">
                    <div className="mb-3">
                        <label className="form-label">Workspace Name</label>
                        <input type="email" className="form-control" placeholder="Workspace Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Workspace URL (optional)</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text" >http://www.eden.com/</span>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>)
}

export default WorkSpace;