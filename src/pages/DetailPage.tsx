import * as Styled from "../styledLayout/MainLayout";
import GetMovieDetail from "../services/GetMovieDetails";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IResponseMovieDetails } from "../services/movieModels";
import { Button } from "@mui/material";
import imageNotFound from "../assets/image-not-found.png";

const DetailPage = () => {
  const [movie, setMovie] = useState<IResponseMovieDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await GetMovieDetail(id as string);
        setMovie(response);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <Styled.DetailWrapper>Loading...</Styled.DetailWrapper>;

  return movie ? (
    <Styled.DetailWrapper>
      <Button
        variant="contained"
        className="goHomeButton"
        onClick={handleGoHome}
      >
        Go Home
      </Button>
      <h1>{movie.Title}</h1>
      <div className="detailInformation">
        <img
          src={
            movie.Poster && movie.Poster !== "N/A"
              ? movie.Poster
              : imageNotFound
          }
          alt={`${movie.Title} Poster`}
        />
        <div className="informationTexts">
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Rated:</strong> {movie.Rated}
          </p>
          <p>
            <strong>Released:</strong> {movie.Released}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Writer:</strong> {movie.Writer}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Language:</strong> {movie.Language}
          </p>
          <p>
            <strong>Country:</strong> {movie.Country}
          </p>

          <p>
            <strong>Metascore:</strong> {movie.Metascore}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
          <p>
            <strong>IMDb Votes:</strong> {movie.imdbVotes}
          </p>
        </div>
      </div>
    </Styled.DetailWrapper>
  ) : (
    <p>Movie not found</p>
  );
};

export default DetailPage;
