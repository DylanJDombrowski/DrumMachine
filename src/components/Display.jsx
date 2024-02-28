import PropTypes from "prop-types";

function Display({ text }) {
  return <div id="display">{text}</div>;
}

Display.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Display;
