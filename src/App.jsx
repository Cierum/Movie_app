import MovieHeader from "./components/MovieHeader"
import MovieList from "./components/MovieList"
import MovieFooter from "./components/MovieFooter"
import { useEffect } from "react";
import { useState } from "react";

function App() {


  const [movies,setMovies] = useState([]);

  const handleMovies = (id) => {
    console.log(id)
    fetchMovieData(id);
  }


  const fetchMovieData = (id) => {
    let url = '';
    if (['now_playing', 'popular', 'top_rated'].includes(id)) {
      url = `https://api.themoviedb.org/3/movie/${id}?language=ko&page=1`
    }
    else {
      url = `https://api.themoviedb.org/3/search/movie?query=${id}&include_adult=false&language=ko&page=1`
    }
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTI4N2QyNDI1ZTM1ZjFhYTg4NzgzZmY4YzZmYWJlMSIsInN1YiI6IjY1ZTdlZjZjZTMyOTQzMDE4NjljY2MxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GflrliubUlY_b3wuxEz19rsG0rheqYjggW2UIyrXnM'
      }
    };
    
    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.results)
        setMovies(response.results)
      })
      .catch(err => console.error(err));
  }
 


  useEffect(() => {
    fetchMovieData('now_playing')
  }, []);

  

  return(
    <>
        <MovieHeader onMovieData={handleMovies}/>
        <MovieList movieList={movies}/>
        <MovieFooter/>
    </>

  )

}

export default App
