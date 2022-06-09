import React from "react";
import { useFormik } from "formik";
import { validationSchema, BASE_URL } from "../utils/helpers";

export default function SearchForm({ formData, makeRequest }) {
  const { min_lon, min_lat, max_lon, max_lat } = formData; 
  const formik = useFormik({
    initialValues: {
      min_lon: min_lon,
      min_lat: min_lat,
      max_lon: max_lon,
      max_lat: max_lat,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      makeRequest(
        `${BASE_URL}${values.min_lon},${values.min_lat},${values.max_lon},${values.max_lat}`
      );
    },
  });
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    isValid,
    dirty,
  } = formik;
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="input-wrapper">
          <div className="input-container">
            <label htmlFor="min_lon">Min Lon</label>
            <input
              className="location-input"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.min_lon}
              type="number"
              name="min_lon"
              id="min_lon"
            />
            {errors.min_lon && touched.min_lon ? (
              <p className="input-error">{errors.min_lon}</p>
            ) : null}
          </div>

          <div className="input-container">
            <label htmlFor="max_lon">Max Lon</label>
            <input
              className="location-input"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.max_lon}
              type="number"
              name="max_lon"
              id="max_lon"
            />
            {errors.max_lon && touched.max_lon ? (
              <p className="input-error">{errors.max_lon}</p>
            ) : null}
          </div>
          <div className="input-container">
            <label htmlFor="min_lat">Min Lat</label>
            <input
              className="location-input"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.min_lat}
              type="number"
              name="min_lat"
              id="min_lat"
            />
            {errors.min_lat && touched.min_lat ? (
              <p className="input-error">{errors.min_lat}</p>
            ) : null}
          </div>

          <div className="input-container">
            <label htmlFor="max_lat">Max Lat</label>
            <input
              className="location-input"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.max_lat}
              type="number"
              name="max_lat"
              id=""
            />
            {errors.max_lat && touched.max_lat ? (
              <p className="input-error">{errors.max_lat}</p>
            ) : null}
          </div>
        </div>
        <div className="btn-container">
          <button
            className="search-btn btn"
            disabled={!(isValid && dirty)}
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
