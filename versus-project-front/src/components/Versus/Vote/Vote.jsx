import PropTypes from 'prop-types';

const Vote = ({ pourcentage1, pourcentage2 }) => {
    return (
        <div>
            <p>Pourcentage de vote pour l&apos;image 1 : {pourcentage1}%</p>
            <p>Pourcentage de vote pour l&apos;image 2 : {pourcentage2}%</p>
        </div>
    );
};

Vote.propTypes = {
    pourcentage1: PropTypes.number.isRequired,
    pourcentage2: PropTypes.number.isRequired,
};

export default Vote;
