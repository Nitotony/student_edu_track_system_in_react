import React from "react";
import "./menuitem.css"
const MenuItem = ({ url, name, logo }) => {
    return (
      <a href={url} className="MenuItem">
        <div className="MenuItem_logo">
          <span>{logo}</span>
        </div>
        <div className="MenuItem_name">{name}</div>
      </a>
    );
};

export default MenuItem;