import "./ItemExperience.css";

import React from "react";
import { useColor } from "../../hooks/useColor";

const ItemExperience = ({ role, company, date, description }) => {
  const { handleHover, hover, styleBall } = useColor();

  return (
    <article className="item_experience" onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <span className="marker" style={hover ? styleBall.hover : styleBall.default}></span>
      <h5>{role}</h5>
      <p className="company_experience">
        {company} | {date}
      </p>
      <p className="description_experience">{description}</p>
    </article>
  );
};

export default ItemExperience;
