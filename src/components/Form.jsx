import React, { useRef, useState } from "react";

//importing genpwd function
import { genpwd } from "../utils/form.utils";

export default function Form(){
    const lenref = useRef();
    const symref = useRef();
    const numref = useRef();

    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        
            let newpwd = genpwd(
                lenref.current.value || 8,
                symref.current.checked, 
                numref.current.checked);

        setPassword(newpwd);
    };

    //taking user inputs
    return <form className="pwdForm" onSubmit={handleSubmit}>
        <h1>create a secure password</h1>
        <div className="pwdInputs">
            <h4 className="pwdText">{password}</h4>
            <div className="flex">
                <label htmlFor="pwdLength">length of the password</label>
                <input type="number" max={40}  min={8}  name="pwdLength"  style={{maxWidth:"6ch"}} ref={lenref} />
            </div>

            <div className="flex">
                <label htmlFor="symbols">add symbols</label>
                <input type="checkbox" name="symbols" ref={symref} />
            </div>

            <div className="flex">
                <label htmlFor="numbers">add numbers</label>
                <input type="checkbox" name="numbers"  ref={numref}/>
            </div>
  
            <button className="btn">create</button>
        </div>
     </form>
}
