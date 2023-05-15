import React, { useEffect, useState } from "react";

const Status = (props) => {
  const [status, setStatus] = useState(props.status);

  const [editMode, setEditMode] = useState(false);

  const changeValue = (e) => {
    setStatus(e.target.value);
  };

  const changeBlur = () => {
    setEditMode(false);
    props.putStatus(status);
  };

  const changeSpan = () => {
    setEditMode(true);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  if (editMode) {
    return (
      <div>
        <input value={status} onChange={changeValue} onBlur={changeBlur} />
      </div>
    );
  } else {
    return (
      <div>
        <span onDoubleClick={changeSpan}>{status}</span>
      </div>
    );
  }
};

export default Status;
