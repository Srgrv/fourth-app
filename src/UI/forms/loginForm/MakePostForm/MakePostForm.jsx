import React from "react";
import { Field, reduxForm } from "redux-form";

const MakePostForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={"input"} name={"post"} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
    </div>
  );
};

const MakePostReduxForm = reduxForm({ form: "makePost" })(MakePostForm);

export default MakePostReduxForm;
