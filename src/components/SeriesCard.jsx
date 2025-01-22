export const SeriesCard = ({ curr_elem }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } = curr_elem;
  const btn_style = {
    padding:'1rem',
    fontSize:'13px',
    border:'none',
    backgroundColor:`${ rating >= 8.5? "#bcce7d" : "#20de20"}`,
    color:'var(--bg-color)',
    cursor:'pointer',
    fontWeight:'bold'
  };
  const ratingStyle = rating >= 8.5 ? "hit" : "flop";
  return (
    <li className="card">
      <div>
        <img src={img_url} alt={name} width="20%" height="20%" />
      </div>
      <div className="cardcontent">
        <h2>Name: {name}</h2>
        <h3>Rating: <span className={`rating ${ratingStyle} `}>{rating}</span></h3>
        <summary>Summary: {description}</summary>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
