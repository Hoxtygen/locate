import { object, number, ref } from "yup";

export const validationSchema = object().shape({
  min_lat: number()
    .min(-90, "minimum allowable value is -90.")
    .max(90, "maximum allowable value is 90.")
    .required("This field is required.")
    .typeError("Must be a number.")
    .test(
      "min less than max",
      "Min Lat must be less than Max Lat.",
      function () {
        let min_lat = this.resolve(ref("min_lat"));
        let max_lat = this.resolve(ref("max_lat"));
        if (min_lat > max_lat) {
          return false;
        }
        return true;
      }
    ),
  max_lat: number()
    .min(
      ref("min_lat"),
      "Maximum lat value must be greater than minimum lat value."
    )
    .max(90, "maximum allowable value is 90.")
    .required("This field is required.")
    .typeError("Must be a number.")
    .test(
      "Compare max_lat and min_lat",
      "Difference between max lat and min lat must not be greater than 0.25.",
      function () {
        let min_lat = this.resolve(ref("min_lat"));
        let max_lat = this.resolve(ref("max_lat"));
        if (max_lat - min_lat > 0.25) {
          return false;
        }
        return true;
      }
    ),

  min_lon: number()
    .typeError("Must be a number.")
    .min(-180, "minimum allowable value is -180.")
    .max(180, "maximum allowable value is 180.")
    .test(
      "min less than max",
      "Min Lon must be less than Max Lon",
      function () {
        let min_lon = this.resolve(ref("min_lon"));
        let max_lon = this.resolve(ref("max_lon"));
        if (min_lon > max_lon) {
          return false;
        }
        return true;
      }
    )
    .required("This field is required."),
  max_lon: number()
    .min(
      ref("min_lon"),
      "maximum lon value must be greater than minimum lon value"
    )
    .max(180, "maximum allowable value is 180.")
    .required("This field is required.")
    .typeError("Must be a number.")
    .test(
      "Compare max_lon and min_lon.",
      "Difference between max lon and min lon must not be greater than 0.25.",
      function () {
        let min_lon = this.resolve(ref("min_lon"));
        let max_lon = this.resolve(ref("max_lon"));
        if (max_lon - min_lon > 0.25) {
          return false;
        }
        return true;
      }
    ),
});

export function capitalizeFirstLetter(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}

export const BASE_URL = "https://www.openstreetmap.org/api/0.6/map?bbox="