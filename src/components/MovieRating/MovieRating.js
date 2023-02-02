import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieRating = ({ number }) => {
  return (
    <>
      <FontAwesomeIcon icon={faStar} />
      <span>{number}</span>
    </>
  );
};
export default MovieRating;
