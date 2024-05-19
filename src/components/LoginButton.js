import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Loginbtn = () => {
    const {login, isAuthenticated} = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => login()}>
                sign in
            </button>
        )
  
    )
}

export default Loginbtn