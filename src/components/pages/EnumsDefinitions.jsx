import { useState, useEffect, useRef } from "react";

export const EnumsDefinitions = () => {

    const contentRef = useRef(null);

    const [activeSection, setActiveSection] = useState("direction");

    const HEADER_OFFSET = 120;

    const sections = [
        "direction",
        "interval",
        "intervalTime",
    ];

    const scrollToSection = (id) => {
        const container = contentRef.current;
        const el = document.getElementById(id);

        if (!container || !el) return;

        const top = el.offsetTop - container.offsetTop - HEADER_OFFSET;

        container.scrollTo({
        top,
        behavior: "smooth",
        });
    };

    useEffect(() => {
        if (!contentRef.current) return;

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
            });
        },
        {
            root: contentRef.current,
            rootMargin: "-30% 0px -60% 0px", // 🔥 top-biased
            threshold: 0,
        },
        );

        sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);


    return(
        <>
            <div className="container-fluid p-0">
                <div className="api-layout">
                    <div className="row">
                        {/* LEFT CONTENT */}
                        <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                            <div className="breadcrumb mb-4">
                                <span className="pill">Enums Definitions</span>
                            </div>
                            <h1 className="api-title">Enums Definitions</h1>
                            <h3 className="top-req-text" id="direction">Direction</h3>
                            <ul>
                                <li style={{marginBottom: '10px'}}><span className="pill">PlusTick </span> price rise</li>
                                <li style={{marginBottom: '10px'}}><span className="pill">ZeroPlusTick </span> trade occurs at the same price as the previous trade, which occurred at a price higher than that for the trade preceding it</li>
                                <li style={{marginBottom: '10px'}}><span className="pill">MinusTick </span> price drop</li>
                                <li style={{marginBottom: '30px'}}><span className="pill">ZeroMinusTick </span> trade occurs at the same price as the previous trade, which occurred at a price lower than that for the trade preceding it</li>
                            </ul>
                            <h3 className="top-req-text" id="interval">interval</h3>
                            <ul>
                                <li style={{marginBottom: '10px'}}><span className="pill">1</span> <span className="pill">3</span> <span className="pill">5</span> <span className="pill">15</span> <span className="pill">30</span> <span className="pill">60</span> <span className="pill">120</span> <span className="pill">240</span> <span className="pill">360</span> <span className="pill">720</span> minute</li>
                                <li style={{marginBottom: '10px'}}><span className="pill">D </span> day</li>
                                <li style={{marginBottom: '10px'}}><span className="pill">W </span> week</li>
                                <li style={{marginBottom: '30px'}}><span className="pill">M </span> month</li>
                            </ul>
                            <h3 className="top-req-text" id="intervalTime">intervalTime</h3>
                            <ul>
                                <li style={{marginBottom: '10px'}}><span className="pill">5min</span> <span className="pill">15min</span> <span className="pill">30min</span> minute</li>
                                <li style={{marginBottom: '10px'}}><span className="pill">1h </span> <span className="pill">4h </span> hour</li>
                                <li style={{marginBottom: '10px'}}><span className="pill">1d </span> day</li>
                            </ul>
                        </div>
             
                         {/* RIGHT SIDEBAR */}
                        <div className="col-lg-3 col-md-4 d-none d-md-block">
                            <div className="api-sidebar">
                                <ul>
                                    <li className={activeSection === "direction" ? "active" : ""}
                                        onClick={() => scrollToSection("direction")}>
                                        Direction
                                    </li>
                                    <li className={activeSection === "interval" ? "active" : ""}
                                        onClick={() => scrollToSection("interval")}>
                                        interval
                                    </li>
                                    <li className={activeSection === "intervalTime" ? "active" : ""}
                                        onClick={() => scrollToSection("intervalTime")}>
                                        intervalTime
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}