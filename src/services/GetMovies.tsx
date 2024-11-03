import axios from "axios";
import { IResponseMovies } from "./movieModels";

const apiKey = "c81dc32b";
const url = "http://www.omdbapi.com/";

const GetMovies = async (
  searchText: string,
  page: number
): Promise<IResponseMovies> => {
  const requestUrl =
    searchText && searchText !== ""
      ? `${url}?s=${searchText}&page=${page}&apikey=${apiKey}`
      : `${url}?page=${page}&apikey=${apiKey}&s='pokemon'`;

  try {
    const response = await axios.get(requestUrl);

    return response.data || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { Response: "false", Search: [], totalResults: "0" }; // Return empty array on error
  }
};

export default GetMovies;
