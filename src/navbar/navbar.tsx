import React, { useState } from "react";
import './navbar.scss';
import { Download } from "@mui/icons-material";

function Navbar() {

    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <nav>
            <div className="navbar-container">
                <div className="navbar-left">
                    <div>Tejas Murkya</div>
                </div>
                <div className="navbar-right">
                    <div className="display-options-wide">
                        <div>Experience</div>
                        <div>Education</div>
                        <div>Projects</div>
                        <div>Contact</div>
                        <div>
                            <a href="../assests/Tejas Murkya.pdf" download={true}>
                                Resume <Download/>
                            </a>
                        </div>
                    </div>
                    <div className={`display-options-short ${openNavbar ? 'open' : 'close'}`} onClick={() => setOpenNavbar(!openNavbar)}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </div>
            {
                openNavbar && 
                <div className="menu-options-short-screen">
                    <div>Experience</div>
                    <div>Education</div>
                    <div>Projects</div>
                    <div>Contact</div>
                    <div>
                        <a href="../assests/Tejas Murkya.pdf" download={true}>
                            Resume <Download className="icons"/>
                        </a>
                    </div>
                </div>
            }
        </nav>
    )
}

export default Navbar;