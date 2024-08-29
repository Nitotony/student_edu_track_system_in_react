import React from "react";

const MenuItem = ({ url, name, logo }) => {
    return (
        <a href={url} className="MenuItem">
            <div className="MenuItem_logo">
                {logo}
            </div>
            <div className="MenuItem_name">
                {name}
            </div>
        </a>
    );
};

export default MenuItem;