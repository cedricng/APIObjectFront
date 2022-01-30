import React from "react";

const Logout=()=>{
    const cancel=()=>{
        window.location='/home';
    }

    const logout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("id");
        window.location="/";
    };

    return(
        <div className="logout__content">
            <button onClick={logout} className="btn-logout">
                Logout
            </button>
            <button onClick={cancel} className="btn-logout">
                Cancel
            </button>
        </div>
    )
}
export default Logout;