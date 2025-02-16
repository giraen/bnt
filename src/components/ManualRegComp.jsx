import { useState } from "react";

const ManualRegComp = () => {
    const [role, setRole] = useState("");
    const [yearLevel, setYearLevel] = useState("");

    const handleRole = (e) => {
        const selectedRole = e.target.value;
        setRole(selectedRole); // Update the role

        // If role is 'COACH' or 'AUDIENCE', set Year Level to 'N/A' and disable the input
        if (selectedRole === "COACH" || selectedRole === "AUDIENCE") {
            setYearLevel("N/A"); // Automatically set "N/A"
        } else {
            setYearLevel(""); // Clear Year Level if the role changes to "PARTICIPANT"
        }
    };

    const restrictYearLevel = (e) => {
        let value = parseInt(e.target.value, 10);
    
        if (isNaN(value)) {
          e.target.value = ""; // Prevents NaN cases
        } else if (value < 1) {
          e.target.value = "1"; // Forces minimum value
        } else if (value > 10) {
          e.target.value = "10"; // Forces maximum value
        }

        setYearLevel(e.target.value);
      };
    
    return(
        <>
            <p className="text-red-500">Please double check your information before submitting</p>
            <form action="" className='text-on-secondary w-full flex flex-col items-center gap-2 px-16 mx-0'>
                <fieldset className='flex gap-4 w-full'>
                    <label htmlFor="lname" className="flex-1 text-left">
                        Last Name <input type = "text" required id = "lname" placeholder = "DELA CRUZ" className='w-full px-2 py-1 border border-gray-300 rounded uppercase'></input>
                    </label>
                    <label htmlFor="fname" className="flex-1 text-left">
                        First Name <input type = "text" required id = "fname" placeholder = "JUAN" className='w-full px-2 py-1 border border-gray-300 rounded uppercase'></input>
                    </label>
                    <label htmlFor="mi" className="w-[50px] text-left">
                        M.I. <input type = "text" maxLength={1}required id = "mi" placeholder = "A" className='w-full px-2 py-1 border border-gray-300 rounded uppercase'></input>
                    </label>
                </fieldset>
    
                <fieldset className="flex gap-4 w-full justify-center">
                    <label htmlFor="yearlevel" className="w-[100px] text-left">
                        YEAR LEVEL <input 
                                    type = "text" 
                                    onChange={restrictYearLevel} 
                                    value={yearLevel} 
                                    placeholder={role === "PARTICIPANT" ? "1" : "N/A"} 
                                    disabled={role === "COACH" || role === "AUDIENCE"} 
                                    required 
                                    id = "yearlevel"  className="w-full px-2 py-1 border border-gray-300 rounded"></input>
                    </label>
        
                    <label htmlFor="dropdown" className="w-[250px] text-left">
                        I'M A/AN
                        <select name="role" id="dropdown" required onChange={handleRole}  className="w-full px-2 py-2 border border-gray-300 rounded my-2.5">
                            <option value="">Select</option>
                            <option value="PARTICIPANT">PARTICIPANT</option>
                            <option value="COACH">COACH</option>
                            <option value="AUDIENCE">AUDIENCE</option>
                        </select>
                    </label>
                </fieldset>
        
                <fieldset className="w-full text-left">
                    <label htmlFor="school">
                        SCHOOL (DO NOT ABBREVIATE) <input type = "text" required id = "school" placeholder = "TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES - MANILA"  className="w-full px-2 py-1 border border-gray-300 rounded uppercase"></input>
                    </label>
                </fieldset>
    
                <input type="submit" value="Submit" id = "submit" className="bg-green-500"/>
            </form>
        </>
      )
}

export default ManualRegComp