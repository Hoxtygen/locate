import React from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

export default function Relation({ data }) {
  const { properties, geometry } = data;
  return (
    <div className="dataset-item">
      <h4>Name: {properties.name}</h4>
      {properties.is_in && (
        <h4>
          Location: <span>{properties.is_in}</span>
        </h4>
      )}
      {properties.type && (
        <h4>
          Type: <span>{capitalizeFirstLetter(properties.type)}</span>
        </h4>
      )}
      {properties.place && (
        <h4>
          Place: <span>{capitalizeFirstLetter(properties.place)}</span>
        </h4>
      )}
      {properties.version && (
        <h4>
          Version: <span>{properties.version}</span>
        </h4>
      )}
      <h4>
        Geometry: <span>{geometry.type} </span>
      </h4>
      {geometry.coordinates && (
        <h4>
          Coordindates: <span>{geometry.coordinates.length}</span>{" "}
        </h4>
      )}
    </div>
  );
}
