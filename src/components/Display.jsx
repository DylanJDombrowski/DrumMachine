import PropTypes from "prop-types";

function Display({ soundName }) {
  return <div id="display">{soundName}</div>;
}

Display.propTypes = {
  soundName: PropTypes.string.isRequired,
};

export default Display;
