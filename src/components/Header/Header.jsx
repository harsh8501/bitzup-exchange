import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { FiSearch, FiMoon, FiSun } from "react-icons/fi";
import LogoDark from "../../../public/logo-dark.svg";
import LogoLight from "../../../public/logo-light.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuLanguages } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

const Header = ({ theme, setTheme }) => {

    const [extrasOpen, setExtrasOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const [drawerView, setDrawerView] = useState("main");

    const [openMarket, setOpenMarket] = useState(false);
    const [openWebStream, setOpenWebStream] = useState(false);
    const [openPublic, setOpenPublic] = useState(false);
    const [openRateLimit, setOpenRateLimit] = useState(false);


    // Extras Dropdown
    const dropdownRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setExtrasOpen(false);
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close dropdown on outside click
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("English");
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setOpen(false);
        }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleSelect = (lang) => {
        setLanguage(lang);
        setOpen(false);
    };

    
    const location = useLocation();

    useEffect(() => {
    if (location.pathname.startsWith("/docs/market")) {
        setOpenMarket(true);
    }
    }, [location.pathname]);

    useEffect(() => {
    if (location.pathname.startsWith("/docs/websocket")) {
        setOpenWebStream(true);
    }

    if (location.pathname.startsWith("/docs/websocket/public")) {
        setOpenWebStream(true);
        setOpenPublic(true);
    }
    }, [location.pathname])

    useEffect(() => {
    if (location.pathname.startsWith("/docs/rate-limit")) {
        setOpenRateLimit(true);
    }
    }, [location.pathname]);


  

    return (
        <>
            <header className="main-header">
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            {/* <span
                                className="d-lg-none"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                > <LuMenu size={36} />
                            </span> */}
                            <span className="d-lg-none"
                                onClick={() => {
                                    setDrawerView("docs");
                                    setMobileOpen(true);
                                }} >
                                <LuMenu size={34} />
                            </span>
                            <Link to="/" className="logo">
                                <img src={theme === "dark" ? LogoLight : LogoDark} alt="logo"width={120}/>
                            </Link>

                            <nav className="nav-links d-none d-md-flex">
                                <NavLink to="/" style={{marginLeft: '16px'}}>Futures API</NavLink>
                                {/* <NavLink to="/p2p">P2P Trading</NavLink>
                                <NavLink to="/bitzup-pay">Bitzup Pay</NavLink>
                                <NavLink to="/tax-api">Tax API V3</NavLink> */}
                            </nav>
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            {/* <div className="extras-dropdown d-none d-md-block">
                                <button
                                    className="extras-trigger"
                                    type="button"
                                    onClick={() => setExtrasOpen((prev) => !prev)}
                                >
                                    Extras <IoMdArrowDropdown size={20} />
                                </button>
                                {extrasOpen && (
                                    <div className="extras-menu">
                                    <NavLink to="/pilot-features" onClick={() => setExtrasOpen(false)}>
                                        Pilot Features
                                    </NavLink>
                                    <NavLink to="/changelog" onClick={() => setExtrasOpen(false)}>
                                        Changelog
                                    </NavLink>
                                    <NavLink to="/api-explorer" onClick={() => setExtrasOpen(false)}>
                                        API Explorer
                                    </NavLink>
                                    <NavLink to="/faq" onClick={() => setExtrasOpen(false)}>
                                        FAQ
                                    </NavLink>
                                    </div>
                                )}
                            </div> */}

                            <div ref={ref} className="lang-dropdown d-none d-md-block">
                                <span
                                    className="lang-trigger"
                                    onClick={() => setOpen((prev) => !prev)}
                                >
                                    <LuLanguages />
                                    {language}
                                    {/* <IoMdArrowDropdown size={20} /> */}
                                </span>

                                {/* {open && (
                                    <div className="lang-menu">
                                    <div
                                        className={`lang-item ${language === "English" ? "active" : ""}`}
                                        onClick={() => handleSelect("English")}
                                    >
                                        English
                                    </div>

                                    <div
                                        className={`lang-item ${language === "中文 (台灣)" ? "active" : ""}`}
                                        onClick={() => handleSelect("中文 (台灣)")}
                                    >
                                        中文 (台灣)
                                    </div>
                                    </div>
                                )} */}
                            </div>
                            <button
                                className="icon-btn"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                                {theme === "dark" ? <FiSun /> : <FiMoon />}
                            </button>

                            {/* SEARCH */}
                            {/* <div className="search-box d-none d-md-flex">
                            <FiSearch />
                            <input placeholder="Search" />
                            </div> */}

                    {/* MOBILE MENU */}
                    
                        </div>
                    </div>

                    {mobileOpen && (
                    <>
                    <div className="mobile-drawer-overlay" onClick={() => setMobileOpen(false)}/>
                        <div className="mobile-drawer">
                        <div className="mobile-drawer-header">
                            <img
                                src={theme === "dark" ? LogoLight : LogoDark}
                                width={110}
                                alt="logo"
                            />
                            <span className="drawer-close" onClick={() => setMobileOpen(false)}>
                                ✕
                            </span>
                        </div>

                        {/* SLIDING SCREENS */}
                        <div className="drawer-screens">

                        {/* ========== MAIN SCREEN ========== */}
                        <div
                className={`drawer-screen main ${
                  drawerView === "main" ? "active" : ""
                }`}
              >
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `drawer-main-item ${isActive ? "active" : ""}`
                            }
                            >
                            Futures API
                            </NavLink>
                            <NavLink
                            to="/p2p"
                            className="drawer-main-item"
                            >
                            P2P Trading
                            </NavLink>

                            <NavLink
                            to="/bitzup-pay"
                            className="drawer-main-item external"
                            >
                            Bitzup Pay ↗
                            </NavLink>

                            <NavLink
                            to="/tax-api-v3"
                            className="drawer-main-item"
                            >
                            Tax API V3
                            </NavLink>
                    </div>


                
              </div>

                        {/* ========== DOCS SCREEN ========== */}
                        <div
                            className={`drawer-screen sub ${
                            drawerView === "docs" ? "active" : ""
                            }`}
                        >
                            <div
                            className="mobile-drawer-back"
                            onClick={() => setDrawerView("main")}
                            >
                            <IoArrowBack /> Back to main menu
                            </div>

                            <NavLink
                            to="/"
                            style={{marginTop: '8px'}}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) =>
                                `drawer-main ${isActive ? "active" : ""}`
                            }
                            >
                            Integration Guidance
                            </NavLink>

                            {/* MARKET */}
                            <div
                            className="drawer-item arrow"
                            onClick={() => setOpenMarket(!openMarket)}
                            >
                            Market <IoIosArrowForward className={openMarket ? "rotate" : ""} />
                            </div>

                            {openMarket && (
                            <div className="drawer-sub">
                                <NavLink to="/docs/market/kline" onClick={() => setMobileOpen(false)} className="drawer-sub-item">Get Kline</NavLink>
                                <NavLink to="/docs/market/orderbook" onClick={() => setMobileOpen(false)} className="drawer-sub-item">Get Orderbook</NavLink>
                                <NavLink to="/docs/market/tickers" onClick={() => setMobileOpen(false)} className="drawer-sub-item">Get Tickers</NavLink>
                            </div>
                            )}

                            {/* WEBSOCKET */}
                            <div
                            className="drawer-item arrow"
                            onClick={() => setOpenWebStream(!openWebStream)}
                            >
                            WebSocket Stream <IoIosArrowForward className={openWebStream ? "rotate" : ""} />
                            </div>

                            {openWebStream && (
                            <div className="drawer-sub">
                                <NavLink to="/docs/ws/connect" onClick={() => setMobileOpen(false)} className="drawer-sub-item">
                                Connect
                                </NavLink>

                                <div
                                className="drawer-item arrow"
                                onClick={() => setOpenPublic(!openPublic)}
                                >
                                Public <IoIosArrowForward className={openPublic ? "rotate" : ""} />
                                </div>

                                {openPublic && (
                                <div className="drawer-sub deep">
                                    <NavLink to="/docs/websocket/public/orderbook" onClick={() => setMobileOpen(false)} className="drawer-sub-item">Orderbook</NavLink>
                                    <NavLink to="/docs/websocket/public/trade" onClick={() => setMobileOpen(false)} className="drawer-sub-item">Trade</NavLink>
                                    <NavLink to="/docs/websocket/public/ticker" onClick={() => setMobileOpen(false)} className="drawer-sub-item">Ticker</NavLink>
                                    <NavLink to="/docs/websocket/public/kline" onClick={() => setMobileOpen(false)} className="drawer-sub-item">Kline</NavLink>
                                </div>
                                )}
                            </div>
                            )}

                            {/* RATE LIMIT */}
                            <div
                            className="drawer-item arrow"
                            onClick={() => setOpenRateLimit(!openRateLimit)}
                            >
                            Rate Limit <IoIosArrowForward className={openRateLimit ? "rotate" : ""} />
                            </div>

                            {openRateLimit && (
                            <div className="drawer-sub">
                                <NavLink to="/docs/rate-limit/rate-limit-rules" onClick={() => setMobileOpen(false)} className="drawer-sub-item">
                                Rate Limit Rules
                                </NavLink>
                            </div>
                            )}

                            <NavLink
                            to="/docs/enums"
                            onClick={() => setMobileOpen(false)}
                            className="drawer-main"
                            >
                            Enums Definitions
                            </NavLink>
                        </div>

                        {/* ========== LANGUAGES SCREEN ========== */}
                        <div
                            className={`drawer-screen sub ${
                            drawerView === "languages" ? "active" : ""
                            }`}
                        >
                            <div
                            className="mobile-drawer-back"
                            onClick={() => setDrawerView("main")}
                            >
                            <IoArrowBack /> Back to main menu
                            </div>
                        </div>

                        </div>
                    </div>
                    </>
                    )}
                {/* {mobileOpen && (
                    <>
                        <div className="mobile-drawer-overlay" onClick={() => setMobileOpen(false)}/>
                            <div className="mobile-drawer d-lg-none">
                                <div className="mobile-drawer-header">
                                    <img src={theme === "dark" ? LogoLight : LogoDark}alt="logo" width={110}/>
                                    <div className="drawer-actions">
                                        <span className="drawer-close"
                                            onClick={() => setMobileOpen(false)}>
                                            ✕
                                        </span>
                                    </div>
                                </div>

                                <div className="mobile-drawer-back" onClick={() => setDrawerView("main")}>
                                    <IoArrowBack /> Back to main menu
                                </div>

                            

                                <div className="mobile-drawer-menu">
                                    <NavLink
                                        to="/"
                                        style={{marginTop: '8px'}}
                                        onClick={() => setMobileOpen(false)}
                                        className={({ isActive }) =>
                                        `drawer-main ${isActive ? "active" : ""}`
                                        }> Integration Guidance
                                    </NavLink>

                                    <div className="drawer-item arrow" onClick={() => setOpenMarket(!openMarket)}>
                                        <span className={openMarket ? "active-text" : ""}>Market</span>
                                        <IoIosArrowForward className={openMarket ? "rotate" : ""} />
                                    </div>

                                    {openMarket && (
                                        <div className="drawer-sub">
                                            <NavLink
                                                to="/docs/market/kline"
                                                onClick={() => setMobileOpen(false)}
                                                className={({ isActive }) =>
                                                    `drawer-sub-item ${isActive ? "active" : ""}`
                                                }> Get Kline
                                            </NavLink>
                                            <NavLink
                                                to="/docs/market/orderbook"
                                                onClick={() => setMobileOpen(false)}
                                                className={({ isActive }) =>
                                                    `drawer-sub-item ${isActive ? "active" : ""}`
                                                }> Get Orderbook
                                            </NavLink>
                                            <NavLink
                                                to="/docs/market/tickers"
                                                onClick={() => setMobileOpen(false)}
                                                className={({ isActive }) =>
                                                `drawer-sub-item ${isActive ? "active" : ""}`
                                                }> Get Tickers
                                            </NavLink>
                                            <NavLink
                                                to="/docs/market/recent-public-trades"
                                                onClick={() => setMobileOpen(false)}
                                                className={({ isActive }) =>
                                                `drawer-sub-item ${isActive ? "active" : ""}`
                                                }> Get Recent Public Trades
                                            </NavLink>
                                            <NavLink
                                                to="/docs/market/market-info"
                                                onClick={() => setMobileOpen(false)}
                                                className={({ isActive }) =>
                                                `drawer-sub-item ${isActive ? "active" : ""}`
                                                }> Market Info
                                            </NavLink>
                                        </div>
                                    )}

                                    <div className="drawer-item arrow" onClick={() => setOpenWebStream(!openWebStream)}>
                                        <span className={openWebStream ? "active-text" : ""}>
                                            WebSocket Stream
                                        </span>
                                        <IoIosArrowForward className={openWebStream ? "rotate" : ""} />
                                    </div>

                                    {openWebStream && (
                                        <div className="drawer-sub">
                                            <NavLink
                                                to="/docs/ws/connect"
                                                onClick={() => setMobileOpen(false)}
                                                className={({ isActive }) =>
                                                    `drawer-sub-item ${isActive ? "active" : ""}`
                                                }> Connect
                                            </NavLink>

                                            <div className="drawer-item arrow" onClick={() => setOpenPublic(!openPublic)}>
                                                <span className={openPublic ? "active-text" : ""}> Public</span>
                                                <IoIosArrowForward className={openPublic ? "rotate" : ""} />
                                            </div>

                                            {openPublic && (
                                                <div className="drawer-sub deep">
                                                    <NavLink
                                                        to="/docs/websocket/public/orderbook"
                                                        onClick={() => setMobileOpen(false)}
                                                        className={({ isActive }) =>
                                                            `drawer-sub-item ${isActive ? "active" : ""}`
                                                        }> Orderbook
                                                    </NavLink>
                                                    <NavLink
                                                        to="/docs/websocket/public/trade"
                                                        onClick={() => setMobileOpen(false)}
                                                        className={({ isActive }) =>
                                                            `drawer-sub-item ${isActive ? "active" : ""}`
                                                        }> Trade
                                                    </NavLink>
                                                    <NavLink
                                                        to="/docs/websocket/public/ticker"
                                                        onClick={() => setMobileOpen(false)}
                                                        className={({ isActive }) =>
                                                            `drawer-sub-item ${isActive ? "active" : ""}`
                                                        }> Ticker
                                                    </NavLink>
                                                    <NavLink
                                                        to="/docs/websocket/public/kline"
                                                        onClick={() => setMobileOpen(false)}
                                                        className={({ isActive }) =>
                                                            `drawer-sub-item ${isActive ? "active" : ""}`
                                                        }>Kline
                                                    </NavLink>
                                                </div>
                                                )}
                                            </div>
                                        )}

                                        <div className="drawer-item arrow" onClick={() => setOpenRateLimit(!openRateLimit)}>
                                            <span className={openRateLimit ? "active-text" : ""}>Rate Limit</span>
                                            <IoIosArrowForward className={openRateLimit ? "rotate" : ""} />
                                        </div>

                                        {openRateLimit && (
                                            <div className="drawer-sub">
                                                <NavLink
                                                    to="/docs/rate-limit/rate-limit-rules"
                                                    onClick={() => setMobileOpen(false)}
                                                    className={({ isActive }) =>
                                                        `drawer-sub-item ${isActive ? "active" : ""}`
                                                    }> Rate Limit Rules
                                                </NavLink>
                                            </div>
                                        )}
                                        
                                        <NavLink
                                            to="/docs/enums"
                                            onClick={() => setMobileOpen(false)}
                                            className={({ isActive }) =>
                                            `drawer-main ${isActive ? "active" : ""}`
                                            }> Enums Definitions
                                        </NavLink>
                                </div>

                                
                            </div>
                        </>
                )} */}
                
                </div>
            </header>
        </>
    );
};

export default Header;
