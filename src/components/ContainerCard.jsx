
import React from 'react';
import Stepper from 'react-stepper-horizontal';
import './containercard.css';
import logo from '../assets/images/eden_logo.png';
import WelcomeComp from "./WelcomeComp/WelcomeComp";
import WorkSpace from "./WorkSpce/WorkSpace";
import HowToUse from "./HowToUse/HowToUse";
import AckComp from "./AckComp/AckComp";

const ContainerCard = () => {
    const [step, setStep] = React.useState(0);

    const onChange = nextStep => {
        setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
    };

    return (<div className="card p-5">
        <div className="card-body px-5">
            <div className="container">
                <div className="row px-5 text-center">
                    <div className="col">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>
            </div>
            <div>
                <div className="row justify-content-md-center py-3">
                    <div className="col-6">
                        <Stepper steps={[{ title: '' }, { title: '' }, { title: '' }, { title: '' }]} activeStep={step} completeBorderColor="#5A4AD1" activeBorderColor="#5A4AD1" activeColor="#5A4AD1" completeColor="#5A4AD1" />
                    </div>
                </div>
                <div className="pt-5">
                    {step === 0 && <WelcomeComp />}
                    {step === 1 && <WorkSpace />}
                    {step === 2 && <HowToUse />}
                    {step === 3 && <AckComp />}
                </div>
                <div className='row text-center py-2'>
                    <div className='mx-auto col-10 col-md-8 col-lg-6'>
                        <div className='d-grid gap-2 work-space-btn'>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                step < 3 && setStep(step + 1);
                            }}>{step === 3 ? "Launch Eden" : "Create WorkSpace"}</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default ContainerCard;