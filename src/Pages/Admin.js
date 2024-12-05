import React, { useState } from "react";
import '../CSS/Admin.css';
import { Link, useHref } from "react-router-dom";
const Admin = () => {
    const [query, setQuery] = useState("");
    return (
        <>
            <header>
                <button>Log out</button>   
                <p>Admin page</p>                       
            </header>
            <div className="searchBar">
                <label>Search</label>
                <input type="text" onChange={e => setQuery(e.target.value)} />
            </div>
        </>
    );
};

export default Admin;

