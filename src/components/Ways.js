import React from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

export default function Ways({ data }) {
  const { properties, geometry } = data;
  return (
    <div className="dataset-item">
      {properties.natural && (
        <h4>
          Natural: <span>{properties.natural}</span>{" "}
        </h4>
      )}
      {properties.source && (
        <h4>
          Type: <span>{properties.source}</span>{" "}
        </h4>
      )}
      {properties.place && (
        <h4>
          Place: <span>{properties.place}</span>{" "}
        </h4>
      )}
      {properties.highway && (
        <h4>
          Highway: <span>{capitalizeFirstLetter(properties.highway)}</span>{" "}
        </h4>
      )}
      <h4>
        Geometry Type: <span>{geometry?.type}</span>{" "}
      </h4>
      {properties.version && (
        <h4>
          Version: <span>{properties.version}</span>{" "}
        </h4>
      )}
      {geometry.coordinates && (
        <h4>
          Coordindates: <span>{geometry.coordinates.length}</span>{" "}
        </h4>
      )}
    </div>
  );
}
