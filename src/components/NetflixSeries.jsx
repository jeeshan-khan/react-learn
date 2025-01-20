import SeriesData from "../api/SeriesData.json";

export const NetflixSeries = () => {
  return (
    <ul>
      {SeriesData.map((curr_elem) => {
        return (
          <li key={curr_elem.id}>
            <div>
              <div>
                <img
                  src={curr_elem.img_url}
                  
                  width="20%"
                  height="20%"
                />
              </div>
              <h2>Name: {curr_elem.name}</h2>
              <h3>Rating: {curr_elem.rating}</h3>
              <summary>Summary: {curr_elem.description}</summary>
              <p>Genre: {curr_elem.genre}</p>
              <p>Cast: {curr_elem.cast.join(", ")}</p>
              <a href={curr_elem.watch_url} target="_blank">
                <button>Watch now</button>
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
