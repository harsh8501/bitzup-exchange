import { useRef } from "react";

export const AbandonedEndpoints = () => {
    const contentRef = useRef(null);

    return (
        <div className="container-fluid p-0">
            <div className="api-layout">
                <div className="row">
                    <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                        <div className="breadcrumb mb-4">
                            <span className="pill">Abandoned Endpoints</span>
                        </div>

                        <h1 className="api-title">Abandoned Endpoints</h1>
                        <p className="api-desc">
                            List of endpoints that have been deprecated or abandoned in V5.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
