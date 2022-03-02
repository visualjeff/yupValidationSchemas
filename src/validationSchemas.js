import { /* array, */ string, object, ref } from "yup";

// Define your validation for certain types of fields
export const firstName = string()
  .trim()
  .required("First name is required.")
  .matches(/^[aA-zZ\s'-ÀÂÆÇÉÈÊËÎÏÔŒÙÛÜŸ]+$/, "Enter a valid first name.");

export const lastName = string()
  .trim()
  .required("Last name is required.")
  .matches(/^[aA-zZ\s'-ÀÂÆÇÉÈÊËÎÏÔŒÙÛÜŸ]+$/, "Enter a valid Last name.");

export const zipCode = string()
  .trim()
  .required("ZIP Code is required.")
  .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, "Enter a valid ZIP Code.");
/* CA Regex would be /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z] ?[0-9][ABCEGHJ-NPRSTV-Z][0-9]$/ */

export const city = string()
  .trim()
  .required("City is required.")
  .matches(/^[aA-zZ\s]+$/, "Enter a valid city.");

export const email = string()
  .email("Enter a valid email address.")
  .required("Email address is required.");

export const confirmEmail = string().oneOf(
  [ref("email"), null],
  "Email addresses do not match."
);

export const phoneNumber = string()
  .trim()
  .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Enter a valid 10-digit phone number."
  );

export const StreetAddress = string()
  .trim()
  .required("Street address is required.")
  .matches(/^[aA-zZ\s0-9]+$/, "Enter a valid street address");

export const aptSuiteUnitEtc = string()
  .trim()
  .matches(/^[aA-zZ\s0-9]+$/, "Enter a valid Apt., Suite, Unit, Etc.");

// Define the colleciton of rules for a particular form
export const sampleFormValidationSchema = object({
  firstName,
  zipCode,
  city,
  email,
  confirmEmail,
  phoneNumber
});
