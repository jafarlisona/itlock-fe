import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  function handleSumbit(values) {
    fetch(`http://localhost:3000/brands`, {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((x) => navigate("/"));
  }
  return (
    <section id="add">
      <Formik
        initialValues={{ title: "", brandName: "", image: "" }}
        validationSchema={Yup.object({
          title: Yup.string()
            .min(5, "Must be 5 characters at least")
            .required("Required"),
          brandName: Yup.string()
            .min(5, "Must be 5 characters at least")
            .required("Required"),
          image: Yup.string()
            .min(5, "Must be 5 characters at least")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          handleSumbit(values);
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="title">Title :</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="brandName">Brand Name :</label>
          <Field name="brandName" type="text" />
          <ErrorMessage name="brandName" />

          <label htmlFor="image">Image :</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </section>
  );
}

export default Add;
