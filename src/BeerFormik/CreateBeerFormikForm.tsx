import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import "../App.css";

function CreateBeerFormikForm() {
  return (
    <div className="divForm">
      <Formik
        initialValues={{
          beerName: "",
          beerType: "",
          hasCorn: false,
          ingredients: "",
        }}
        onSubmit={(values) => {
          console.log(
            `beer name: ${values.beerName}\ntype of beer: ${values.beerType}\nhas corn: ${values.hasCorn}\ningredients: ${values.ingredients}`
          );
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>
              Beer Name:
              <Field type="text" name="beerName" onChange={handleChange} />
            </label>
            <br />
            <label>
              Type of Beer:
              <select name="beerType" onChange={handleChange}>
                <option value="">Selecione</option>
                <option value="ale">Ale</option>
                <option value="lager">Lager</option>
                <option value="stout">Stout</option>
              </select>
            </label>
            <br />
            <label>
              Has Corn:
              <input
                type="checkbox"
                name="hasCorn"
                onChange={handleChange}
              ></input>
            </label>
            <br />
            <label>
              Ingredients:
              <textarea name="ingredients" onChange={handleChange}></textarea>
            </label>
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateBeerFormikForm;
