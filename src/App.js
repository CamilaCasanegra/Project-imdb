import MovieTitle from "./components/MovieTitle/MovieTitle";

import "./App.css";
import MovieButton from "./components/MovieButton/MovieButton";
import MovieRating from "./components/MovieRating/MovieRating";


function App() {
  return (
    <div className="App">
      <div id="card">
        <MovieTitle name={"Batman"} />
        <MovieButton text={"Watchlist"} />
        <MovieButton text={"Trailer"}/>
        <MovieRating number={9.3}/>

      </div>
    </div>
  );
}

export default App;
