import PropTypes from 'prop-types';

const Images = ({ image1, image2, onClick }) => {
    return (
        <div>
            <img src={image1} alt="Image 1" onClick={() => onClick(1)} />
            <img src={image2} alt="Image 2" onClick={() => onClick(2)} />
        </div>
    );
};

Images.propTypes = {
    image1: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Images;
