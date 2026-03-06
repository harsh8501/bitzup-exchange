import { useRef } from "react";

export const UserEndpoints = () => {
    const contentRef = useRef(null);

    return (
        <div className="container-fluid p-0">
            <div className="api-layout">
                <div className="row">
                    <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                        <div className="breadcrumb mb-4">
                            <span className="pill">User</span>
                        </div>

                        <h1 className="api-title">User Endpoints</h1>
                        <p className="api-desc">
                            Manage user account settings and API keys.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
