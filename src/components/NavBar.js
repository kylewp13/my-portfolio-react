import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return(
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact
                        activeClassName="text-red" 
                        className="inflex-flex items-center py-6 px-6 mr-4 text-white text-4xl font-bold cursive tracking-widest"
                    >
                        Kyle Hallberg
                    </NavLink>
                    <NavLink 
                        to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rouned text-red-200 hover:text-white" 
                        activeClassName="text-red-100 bg-red-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        className="inline-flex items-center py-3 px-3 my-6 rouned text-red-200 hover:text-white" 
                        activeClassName="text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rouned text-red-200 hover:text-white" 
                        activeClassName="text-red-100 bg-red-700"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon 
                        url="https://www.linkedin.com/in/kyletech/" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }} 
                    />
                    <SocialIcon 
                        url="https://github.com/kylewp13" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }} 
                    />
                     <SocialIcon 
                        url="https://open.spotify.com/user/dx5li5aqn7q74b2hg9k2dm958" 
                        className="mr-4" 
                        target="_blank" 
                        fgColor="#fff" 
                        style={{ height: 35, width: 35 }} 
                    />
                </div>
            </div>
        </header>
    )
};