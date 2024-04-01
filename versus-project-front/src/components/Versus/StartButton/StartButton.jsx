import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './StartButton.scss';

const StartButton = ({ onClick }) => {
    return (
        <Button className="start-button" variant="outlined" color="primary">Commencer</Button>
    );
};

StartButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default StartButton;
