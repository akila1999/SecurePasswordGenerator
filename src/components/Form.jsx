import React, { useState } from "react";
import { generatePassword } from "../utils/form.utils";

export default function Form() {
    const [length, setLength] = useState(6);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPassword = generatePassword(includeNumbers, includeSymbols, length);
        setPassword(newPassword);
    };

    return (
        <form className="password__form" onSubmit={handleSubmit}>
            <h2>Generate a secure password</h2>
            <div className="password__inputs">
                <h4 className="password__text">{password}</h4>
                <div className="flex">
                    <label htmlFor="password-length">Password Length ?</label>
                    <input
                        type="number"
                        max={72}
                        min={6}
                        name="password-length"
                        style={{ maxWidth: "8ch" }}
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                </div>
                <div className="flex">
                    <label htmlFor="numbers">Include Numbers ?</label>
                    <input
                        type="checkbox"
                        name="numbers"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                </div>
                <div className="flex">
                    <label htmlFor="symbols">Include symbols ?</label>
                    <input
                        type="checkbox"
                        name="symbols"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                    />
                </div>
                <button className="btn">Generate</button>
            </div>
        </form>
    );
}
