import axios from "axios";
import { IResponseMovieDetails } from "./movieModels";

const apiKey = "c81dc32b";
const url = "http://www.omdbapi.com/";

const GetMovieDetail = async (id: string): Promise<IResponseMovieDetails> => {
  const requestUrl = `${url}?i=${id}&apikey=${apiKey}`;

  const response = await axios.get(requestUrl);

  return response.data || []; // Return movies array
};

export default GetMovieDetail;
