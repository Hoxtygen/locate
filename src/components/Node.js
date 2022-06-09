import React from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

export default function Node({ data }) {
  const { properties, geometry } = data;
  return (
    <div className="dataset-item">
      {properties.railway && (
        <h4>
          Railway: <span>{capitalizeFirstLetter(properties.railway)}</span>
        </h4>
      )}
      {properties.highway && (
        <h4>
          Highway: <span>{capitalizeFirstLetter(properties.highway)}</span>{" "}
        </h4>
      )}
      <h4>
        Geometry Type: <span>{geometry?.type}</span>
      </h4>
      {properties.version && (
        <h4>
          Version: <span>{properties.version}</span>
        </h4>
      )}
      {geometry.coordinates && (
        <h4>
          Coordindates: <span>{geometry.coordinates.length}</span>
        </h4>
      )}
    </div>
  );
}
