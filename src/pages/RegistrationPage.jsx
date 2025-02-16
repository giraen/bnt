import QrRegComp from "../components/QrRegComp.jsx"
import ManualRegComp from "../components/ManualRegComp.jsx"
import SwitchRegMethodComp from "../components/SwitchRegMethodComp.jsx"
import { useState } from "react";

const RegistrationPage = () => {
    const [showQrRegComp, setShowRegComp] = useState(true);

    const switchRegMethod = () => {
        setShowRegComp(!showQrRegComp);
    }

    return (
        <>
            <div className='h-screen flex justify-center w-3/5 items-center'>
                <img src="/bnt_logo-transparent.png" alt="Logo" className="max-w-full h-auto mx-auto" />
            </div>

            <div className='w-screen flex h-screen flex-col justify-between outline rounded-l-3xl items-center py-12 px-11'>
                <h1>Broadkast ng Talino Registration App</h1>
                {showQrRegComp && <QrRegComp />}
                {!showQrRegComp && <ManualRegComp />}
                <p>or</p>
                <SwitchRegMethodComp switchRegMethod={switchRegMethod} showQrRegComp={showQrRegComp} />
            </div>
        </>
    )
};

export default RegistrationPage