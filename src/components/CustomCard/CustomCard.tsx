import * as Styled from "./CustomCard.Styled";
import { IMovies } from "../../services/movieModels";
import imageNotFound from "../../assets/image-not-found.png";

interface ICustomCardProps {
  movieDetails: IMovies;
}

const CustomCard: React.FC<ICustomCardProps> = ({ movieDetails }) => {
  const handleDetailUrl = () => {
    return `/details/${movieDetails.imdbID}`;
  };
  return (
    <Styled.CustomCardWrapper>
      <div className="imageWrapper">
        {movieDetails.Poster && movieDetails.Poster !== "N/A" ? (
          <img src={movieDetails.Poster} alt={movieDetails.Title} />
        ) : (
          <img
            src={imageNotFound}
            alt={movieDetails.Title}
          />
        )}
      </div>
      <div className="information">
        <span>{movieDetails.Title}</span>
        <span>{movieDetails.Year}</span>
        <a href={handleDetailUrl()} target="_blank" rel="noreferrer">
          show more..
        </a>
      </div>
    </Styled.CustomCardWrapper>
  );
};

export default CustomCard;
