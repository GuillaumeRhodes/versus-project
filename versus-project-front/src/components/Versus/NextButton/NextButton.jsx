import PropTypes from 'prop-types';

const NextButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>Suivant</button>
  );
};

NextButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default NextButton;
