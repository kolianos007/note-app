import React from "react";
import PropTypes from "prop-types";
import "./Button.sass";

const Button = ({ classNames, btnText, onClickHandler }) => {
  return (
    <button type="submit" className={classNames} onClick={onClickHandler}>
      {btnText}
    </button>
  );
};

Button.propTypes = {
  classNames: PropTypes.string,
  btnText: PropTypes.string,
  onClickHandler: PropTypes.func,
};

Button.defaultProps = {
  classNames: "btn",
  btnText: "",
  onClickHandler: () => {},
};

export default Button;
