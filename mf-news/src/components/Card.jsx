import React from "react";
import "./Card.css";

export default function Card(props) {
  const title = props.title;
  const description = props.description;

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}
