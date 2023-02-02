import MovieTitle from "./components/MovieTitle/MovieTitle";

import "./App.css";
import MovieButton from "./components/MovieButton/MovieButton";
import MovieRating from "./components/MovieRating/MovieRating";
import MovieBanner from "./components/MovieBanner/MovieBanner";


function App() {
  return (
    <div className="App">
      <div id="card">
        <MovieTitle name={"Batman"} />
        <MovieButton text={"Watchlist"} />
        <MovieButton text={"Trailer"}/>
        <MovieRating number={9.3}/>
        <MovieBanner url={"https://www.google.com/search?q=nene+meme&rlz=1C1GCEA_enAR1024AR1024&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiK6ePO3Pf8AhVTqJUCHT91C2MQ_AUoAXoECAEQAw&biw=1280&bih=577&dpr=1.5#imgrc=ptcClRVxsMUA9M"}/>

      </div>
    </div>
  );
}

export default App;
