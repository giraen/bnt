const SwitchRegMethodComp = ({switchRegMethod, showQrRegComp}) => {
    return(
        <div className="">
            {/* <p className="my-1">or</p> */}
            <button className="bg-blue-500 text-white p-2 rounded"
                onClick={switchRegMethod} >
            {showQrRegComp ? "Manually Register" : "Scan QR Code"} 
            </button>
        </div>
 
    )  
};

export default SwitchRegMethodComp