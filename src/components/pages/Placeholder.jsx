import { IoIosArrowForward } from "react-icons/io";

export const Placeholder = ({ title, breadcrumbGroup }) => {
    return (
        <div className="container-fluid p-0">
            <div className="api-layout">
                <div className="row">
                    <div className="col-12 api-content">
                        <div className="breadcrumb mb-4">
                            <span className="kline-market">{breadcrumbGroup}</span>
                            <span className="mx-2">
                                <IoIosArrowForward className="kline-arrow" />
                            </span>
                            <span className="pill">{title}</span>
                        </div>
                        <h1 className="api-title">{title}</h1>
                        <p className="api-desc">Documentation for {title} is currently under construction.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
