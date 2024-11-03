import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";

import GetMovies from "../services/GetMovies";
import { IMovies } from "../services/movieModels";
import CustomPaginator from "../components/CustomPaginator/CustomPaginator";
import * as Styled from "../styledLayout/MainLayout";
import SearchComponent from "../components/CustomSearch/CustomSearch";
import CustomCard from "../components/CustomCard/CustomCard";

const HomePage = () => {
  const [search, setSearch] = useState<string>("Pokemon");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [movieList, setMovieList] = useState<IMovies[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMovies = useCallback(
    debounce(async (searchTerm: string) => {
      const response = await GetMovies(searchTerm, pageNumber);
      setTotalResults(Number(response.totalResults));
      setMovieList(response.Search || []);
    }, 300),
    [pageNumber]
  );

  useEffect(() => {
    if (search) {
      fetchMovies(search);
    } else {
      fetchMovies("");
    }

    return () => {
      fetchMovies.cancel();
    };
  }, [search, fetchMovies]);

  const handleSearch = (text: string) => {
    setSearch(text);
    setPageNumber(1);
  };

  return (
    <Styled.MainWrapper>
      <SearchComponent searchSetter={handleSearch} />
      <CustomPaginator
        currentPage={pageNumber}
        totalPages={Math.ceil(totalResults / 10)}
        onPageChange={setPageNumber}
      />
      <Styled.CardsWrapper>
        {movieList.length > 0 &&
          movieList.map((movie) => <CustomCard movieDetails={movie} />)}
      </Styled.CardsWrapper>
    </Styled.MainWrapper>
  );
};

export default HomePage;
