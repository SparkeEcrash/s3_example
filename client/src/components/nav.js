import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <nav style={{padding: '0 12px'}} className="blue">
        <div className="nav-wrapper">
            <Link className="brand-logo" to="/">Image Upload</Link>

            <ul className="right">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/image-upload">Upload Image</Link>
                </li>
            </ul>
        </div>
    </nav>
);
