import { Form, Formik } from "formik";
import "../App.css";
import * as yup from "yup";

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
        validationSchema={yup.object({
          beerName: yup.string().required(),
          beerType: yup.string().required(),
          hasCorn: yup.boolean().required(),
          ingredients: yup.string().required(),
        })}
        onSubmit={(values) => {
          console.log(
            `beer name: ${values.beerName}\ntype of beer: ${values.beerType}\nhas corn: ${values.hasCorn}\ningredients: ${values.ingredients}`
          );
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <label>
              Beer Name:
              <input
                type="text"
                name="beerName"
                onChange={formik.handleChange}
              />
            </label>
            <br />
            <label>
              Type of Beer:
              <select name="beerType" onChange={formik.handleChange}>
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
                onChange={formik.handleChange}
              ></input>
            </label>
            <br />
            <label>
              Ingredients:
              <textarea
                name="ingredients"
                onChange={formik.handleChange}
              ></textarea>
            </label>
            <br />
            <button
              type="submit"
              disabled={!(formik.dirty && formik.isValid)}
              onClick={() => {
                console.log(`disabled :${formik.dirty && formik.isValid}`);
              }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateBeerFormikForm;
