import React from "react";
import "./Navbar.css";

setTimeout(() => {
    const searchButton = document.querySelector(
        "nav .desktop-nav .link-search"
    );
    const closeButton = document.querySelector(".search-container .link-close");
    const closebtn = document.getElementById("abcclose");
    const desktopNav = document.querySelector(".desktop-nav");
    const searchContainer = document.querySelector(".search-container");
    const overlay = document.querySelector(".overlay");

    searchButton.addEventListener("click", () => {
        desktopNav.classList.add("hide");
        searchContainer.classList.remove("hide");
        overlay.classList.add("show");
    });

    closeButton.addEventListener("click", () => {
        desktopNav.classList.remove("hide");
        searchContainer.classList.add("hide");
        overlay.classList.remove("show");
    });
    overlay.addEventListener("click", () => {
        desktopNav.classList.remove("hide");
        searchContainer.classList.add("hide");
        overlay.classList.remove("show");
    });

    // Mobile Version

    const menuIconContainer = document.querySelector(
        "nav .menu-icon-container"
    );
    const navContainer = document.querySelector(".nav-container");

    menuIconContainer.addEventListener("click", () => {
        navContainer.classList.toggle("active");
    });

    const searchBar = document.querySelector(
        ".mobile-search-container .search-bar"
    );
    const nav = document.querySelector(".nav-container nav");
    const searchInput = document.querySelector(
        ".mobile-search-container input"
    );
    const cancelBtn = document.querySelector(
        ".mobile-search-container .cancel-btn"
    );

    searchInput.addEventListener("click", () => {
        searchBar.classList.add("active");
        nav.classList.add("move-up");
        desktopNav.classList.add("move-down");
    });

    cancelBtn.addEventListener("click", () => {
        searchBar.classList.remove("active");
        nav.classList.remove("move-up");
        desktopNav.classList.remove("move-down");
    });
    closebtn.addEventListener("click", () => {
        navContainer.classList.toggle("active");
    });

}, 10);


const Navbar = () => {
    const p = (e) => {
        const navContainer = document.querySelector(".nav-container");
        const desktopNav = document.querySelector(".desktop-nav");
        const searchContainer = document.querySelector(".search-container");
        const overlay = document.querySelector(".overlay");
        desktopNav.classList.remove("hide");
        searchContainer.classList.add("hide");
        navContainer.classList.toggle("active");
        overlay.classList.remove("show");
    }
    return (
        <>
            <div className="nav-container">
                <nav>
                    <ul className="mobile-nav">
                        <li>
                            <div className="menu-icon-container">
                                <div className="menu-icon">
                                    <span className="line-1"></span>
                                    <span className="line-2"></span>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="#" className="link-logo"></a>
                        </li>

                        <li>
                            <a href="#" className="link-bag"></a>
                        </li>
                    </ul>

                    <ul className="desktop-nav">
                        <li>
                            <a href="#" className="link-logo"></a>
                        </li>
                        <li>
                            <a href="#cars"onClick={p}>Cars</a>
                        </li>
                        <li>
                            <a href="#trucks"  onClick={p}>Cyber Truck</a>
                        </li>
                        <li>
                            <a href="#Semi" onClick={p}>Semi</a>
                        </li>
                        <li>
                            <a href="#Roadster" onClick={p}>Roadster</a>
                        </li>
                        <li>
                            <a href="#services" onClick={p}>Services</a>
                        </li>
                        <li>
                            <a href="#articles" onClick={p}>Recommendations</a>
                        </li>
                        <li>
                            <a href="#" onClick={p}>Login</a>
                        </li>
                        <li>
                            <a href="#" className="link-search"></a>
                        </li>
                        <li>
                            <a href="#" className="link-bag"></a>
                        </li>
                    </ul>
                </nav>

                {/* End of navigation menu items*/}

                <div className="search-container hide">
                    <div className="link-search"></div>
                    <div className="search-bar">
                        <form action="">
                            <input type="text" placeholder="Search tesla.com" />
                        </form>
                    </div>
                    <div className="link-close"></div>

                    <div className="quick-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <a href="#">Visiting an Tesla Store FAQ</a>
                            </li>
                            <li>
                                <a href="#">Get your Tesla Online</a>
                            </li>
                            <li>
                                <a href="#">Accessories</a>
                            </li>
                            <li>
                                <a href="#">Solar Panels</a>
                            </li>
                            <li>
                                <a href="#trucks">Cyber Truck</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mobile-search-container">
                    <div className="link-search"></div>
                    <div className="search-bar">
                        <form action="">
                            <input type="text" placeholder="Search tesla.com" />
                        </form>
                    </div>
                    <span className="cancel-btn">Cancel</span>

                    <div className="quick-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <a href="#">Visiting an Tesla Store FAQ</a>
                            </li>
                            <li>
                                <a href="#">Get your Tesla Online</a>
                            </li>
                            <li>
                                <a href="#">Accessories</a>
                            </li>
                            <li>
                                <a href="#">Solar Panels</a>
                            </li>
                            <li>
                                <a href="#">Cyber Truck</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="overlay"></div>
        </>
    );
};

export default Navbar;