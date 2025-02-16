import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QrScanner from 'qr-scanner';

const QrRegComp = () => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [scannedData, setScannedData] = useState(null);

    useEffect(() => {
        // Initialize QR scanner
        const scanner = new QrScanner(videoRef.current, (result) => {
            console.log("Scanned Data: ", result.data);

            try {
                const data = JSON.parse(result.data);
                setScannedData(data);
                scanner.stop();

                navigate("/confirmation", {state: data});
            } catch (error) {
                console.error("Invalid QR Code format:", error);
            }

        }, {
            highlightScanRegion: true,
            highlightCodeOutline: true,
        });

        scanner.start();

        return () => {
            // Cleanup on component unmount
            scanner.stop();
        };
    }, [navigate]);
    
    return(
        <>
            <div className="bg-gray-300 w-72 h-72 rounded-md flex items-center justify-center">
               <video ref={videoRef} className="w-full h-full object-cover bg-gray-200"></video>
            </div>
            <p className='text-red-500 '>Please present your QR Code</p>
        </>
    )
}

export default QrRegComp