import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state || {}; // Get scanned data from navigation state

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8081/register", {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                alert("Registration successful!");
                navigate("/");
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit. Please try again.");
        }
    }

    return (
        <>
            <div className='h-screen flex justify-center w-3/5 items-center'>
                <img src="/bnt_logo-transparent.png" alt="Logo" className="max-w-full h-auto mx-auto" />
            </div>

            <div className='w-screen flex h-screen flex-col justify-between gap-3 outline rounded-l-3xl items-center py-20 px-11'>
                <h1>Confirm your information</h1>
                <form onSubmit={handleSubmit} className='text-on-secondary w-full flex flex-col items-center gap-4 px-16'>
                    <div className='w-full text-left'> {/* Added w-full and text-left for BNT ID container */}
                        <p className='font-bold'>BNT ID: <span className='font-normal'>{data.bntId || "Not Available"}</span></p>
                    </div>
                    <fieldset className='flex gap-4 w-full'>
                        <label htmlFor="lname" className="flex-1 text-left font-bold">
                            Last Name <input type = "text" required id = "lname" value={data.lastname} readOnly className='w-full px-2 py-1 border border-gray-300 rounded uppercase font-normal'></input>
                        </label>
                        <label htmlFor="fname" className="flex-1 text-left font-bold">
                            First Name <input type = "text" required id = "fname" value={data.firstname} readOnly  className='w-full px-2 py-1 border border-gray-300 rounded uppercase font-normal'></input>
                        </label>
                        <label htmlFor="mi" className="w-[50px] text-left font-bold">
                            M.I. <input type = "text" maxLength={1} required id = "mi" value={data.middle_initial} readOnly  className='w-full px-2 py-1 border border-gray-300 rounded uppercase font-normal'></input>
                        </label>
                    </fieldset>
        
                    <fieldset className="flex gap-4 w-full justify-center">

                        <label htmlFor="yearlevel" className="w-[100px] text-left font-bold">
                            YEAR LEVEL <input 
                                        type = "text"
                                        value={data.year_level}
                                        readOnly
                                        required 
                                        id = "yearlevel"  className="w-full px-2 py-1 border border-gray-300 rounded font-normal"></input>
                        </label>
            
                        <label htmlFor="dropdown" className="w-[250px] text-left font-bold">
                            I'M A/AN
                            <select name="role" id="dropdown" required value={data.role} readOnly  className="w-full px-2 py-2 border border-gray-300 rounded my-2.5 font-normal">
                                <option value="">Select</option>
                                <option value="PARTICIPANT">PARTICIPANT</option>
                                <option value="COACH">COACH</option>
                                <option value="AUDIENCE">AUDIENCE</option>
                            </select>
                        </label>
                    </fieldset>
            
                    <fieldset className="w-full text-left">
                        <label htmlFor="school" className='font-bold'>
                            SCHOOL (DO NOT ABBREVIATE) <input type = "text" required id = "school" value={data.school} readOnly  className="w-full px-2 py-1 border border-gray-300 rounded uppercase font-normal"></input>
                        </label>
                    </fieldset>
        
                    <input type="submit" value="Submit" id = "submit" />
                </form>
            </div>
        </>
    );
};

export default ConfirmationPage;
