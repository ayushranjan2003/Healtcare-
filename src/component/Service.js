import React from "react";

export default function Service({
  id,
  name,
  description,
  price,
  handelDelete,
}) {
  return (
    <div className="service-container">
      <h2 className="servie-heading">{name}</h2>
      <p className="service-description">{description}</p>
      <h3 className="service-price"> $ {Number(price).toFixed(2)}</h3>
      <button onClick={() => handelDelete(id)}>Delete</button>
    </div>
  );
}
