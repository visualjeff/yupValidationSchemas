import React from "react";
import { useFormik } from "formik";
import { sampleFormValidationSchema } from "./validationSchemas";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Styled from "@emotion/styled";

const Flex = Styled(Box)`
  display: flex;
  gap: 10px;
`;

const SampleForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: ""
    },
    validationSchema: sampleFormValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex sx={{ m: "10px" }}>
        <Box sx={{ display: "flex", flexShrink: 4 }}>
          <label htmlFor="firstName">First Name</label>
        </Box>
        <Box style={{ isplay: "flex", flexGrow: 4 }}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            style={{ width: "100%" }}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </Box>
      </Flex>
      <Flex sx={{ m: "10px" }}>
        <Box sx={{ display: "flex", flexShrink: 4 }}>
          <label htmlFor="zipCode">Zip Code</label>
        </Box>
        <Box style={{ isplay: "flex", flexGrow: 4 }}>
          <input
            id="zipCode"
            name="zipCode"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zipCode}
            style={{ width: "100%" }}
          />
          {formik.touched.zipCode && formik.errors.zipCode ? (
            <div>{formik.errors.zipCode}</div>
          ) : null}
        </Box>
      </Flex>
      <Flex sx={{ m: "10px" }}>
        <Box sx={{ display: "flex", flexShrink: 4 }}>
          <label htmlFor="city">City</label>
        </Box>
        <Box style={{ isplay: "flex", flexGrow: 4 }}>
          <input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            style={{ width: "100%" }}
          />
          {formik.touched.city && formik.errors.city ? (
            <div>{formik.errors.city}</div>
          ) : null}
        </Box>
      </Flex>
      <Flex sx={{ m: "10px" }}>
        <Box sx={{ display: "flex", flexShrink: 4 }}>
          <label htmlFor="email">Email Address</label>
        </Box>
        <Box style={{ isplay: "flex", flexGrow: 4 }}>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            style={{ width: "100%" }}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </Box>
      </Flex>
      <Flex sx={{ m: "10px" }}>
        <Box sx={{ display: "flex", flexShrink: 4 }}>
          <label htmlFor="email">Confirm Email Address</label>
        </Box>
        <Box style={{ isplay: "flex", flexGrow: 4 }}>
          <input
            id="confirmEmail"
            name="confirmEmail"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmEmail}
            style={{ width: "100%" }}
          />
          {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
            <div>{formik.errors.confirmEmail}</div>
          ) : null}
        </Box>
      </Flex>
      <Flex sx={{ m: "10px" }}>
        <Box sx={{ display: "flex", flexShrink: 4 }}>
          <label htmlFor="email">Phone Number</label>
        </Box>
        <Box style={{ isplay: "flex", flexGrow: 4 }}>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            style={{ width: "100%" }}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div>{formik.errors.phoneNumber}</div>
          ) : null}
        </Box>
      </Flex>
      <Flex sx={{ justifyContent: "flex-end" }}>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default SampleForm;
