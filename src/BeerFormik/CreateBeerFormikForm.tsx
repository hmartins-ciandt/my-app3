import { Form, Formik } from "formik";
import "../App.css";
import * as yup from "yup";
import {
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

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

          ingredients: yup.string().required(),
        })}
        onSubmit={(values) => {
          console.log(
            `beer name: ${values.beerName}\ntype of beer: ${values.beerType}\nhas corn: ${values.hasCorn}\ningredients: ${values.ingredients}`
          );
        }}
      >
        {(formik) => (
          <Card>
            <Form onSubmit={formik.handleSubmit}>
              <FormControl>
                <TextField
                  type="text"
                  name="beerName"
                  id="beerName"
                  label="Beer Name"
                  onChange={formik.handleChange}
                  required
                ></TextField>
                <label>
                  Type of Beer:
                  <Select
                    name="beerType"
                    id="beerType"
                    value={formik.values.beerType}
                    onChange={formik.handleChange}
                    required
                  >
                    <MenuItem value={""}>Selecione</MenuItem>
                    <MenuItem value={"ale"}>Ale</MenuItem>
                    <MenuItem value={"lager"}>Lager</MenuItem>
                    <MenuItem value={"stout"}>Stout</MenuItem>
                  </Select>
                </label>
                <FormControlLabel
                  label="Has Corn:"
                  control={
                    <Checkbox
                      name="hasCorn"
                      id="hasCorn"
                      onChange={formik.handleChange}
                    />
                  }
                />
                <TextField
                  name="ingredients"
                  id="ingredients"
                  label="ingredients"
                  onChange={formik.handleChange}
                  required
                ></TextField>

                <Button
                  name="botao"
                  id="botao"
                  type="submit"
                  color="secondary"
                  variant="contained"
                  disabled={!(formik.dirty && formik.isValid)}
                  onClick={() => {
                    console.log(
                      `disabled :${!(formik.dirty && formik.isValid)}`
                    );
                  }}
                >
                  Submit
                </Button>
              </FormControl>
            </Form>
          </Card>
        )}
      </Formik>
    </div>
  );
}

export default CreateBeerFormikForm;
