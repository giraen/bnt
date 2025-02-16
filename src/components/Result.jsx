const Result = ({hasScanned, showManualReg, showQrScan }) => {
    if (hasScanned) {
      return(
        <p>You're now registered! Please proceed to the venue.</p>
      )
    }
    return(
      <>
        <div>
          <p className='text-red-500 '>
            Please present your QR code <br/>
            <span className='text-on-secondary'>or</span>
          </p>
          {/* <button className='bg-transparent text-on-secondary px-4 py-2 rounded w-52 custom-gradient-button'
                  onClick={showManualReg}>
            Manually Register
          </button> */}
          <SwitchReg toggle={showManualReg} showQrScan={showQrScan}/>
        </div>
      </>  
    )
};

export default Result