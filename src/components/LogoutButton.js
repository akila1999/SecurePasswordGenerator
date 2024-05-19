import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Logoutbtn = () => {
    const {logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <button onClick={() => logout()}>
                sign out
            </button>
        )
  
    )
}

export default Logoutbtn