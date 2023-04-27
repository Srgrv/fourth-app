import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./makePostForm.module.css";
import { required, maxLength } from "./validators";
import Input from "./formsControls/Input";

const length10 = maxLength(10);

const MakePostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className={classes.makePost}>
        <div className={classes.input}>
          <Field
            name={"post"}
            component={Input}
            placeholder="write new post"
            validate={[required, length10]}
          />
        </div>
        <div className={classes.button}>
          <button>add</button>
        </div>
      </form>
    </div>
  );
};

const MakePostReduxForm = reduxForm({ form: "makePost" })(MakePostForm);

export default MakePostReduxForm;
