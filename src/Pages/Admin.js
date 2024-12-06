import React, { useState } from "react";
import '../CSS/Admin.css';
const Admin = () => {
    const [query, setQuery] = useState("");
    return (
        <>
            <header>
                <button>Log out</button>   
                <p>Admin page</p>                       
            </header>
            <div className="searchBar">
                <label>Search:</label>
                <input type="text" placeholder="Search stock here" onChange={e => setQuery(e.target.value)} />
            </div>
        </>
    );
};

export default Admin;

