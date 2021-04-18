import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/index";
import "./Modal.css";

const Modal = (props) => {
  if (props.children !== null) {
    setTimeout(() => {
      props.clearState();
    }, 2000);
  }
  return (
    <>
      <div className='modal'>
        <p>{props.children}</p>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearState: () => dispatch(actions.clearState()),
  };
};

export default connect(null, mapDispatchToProps)(Modal);
