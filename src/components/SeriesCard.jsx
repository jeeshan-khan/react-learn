export const SeriesCard = (props) =>
{
    return (
            <li >
              <div>
                <div>
                  <img
                    src={props.curr_elem.img_url}
                    width="20%"
                    height="20%"
                  />
                </div>
                <h2>Name: {props.curr_elem.name}</h2>
                <h3>Rating: {props.curr_elem.rating}</h3>
                <summary>Summary: {props.curr_elem.description}</summary>
                <p>Genre: {props.curr_elem.genre}</p>
                <p>Cast: {props.curr_elem.cast.join(", ")}</p>
                <a href={props.curr_elem.watch_url} target="_blank">
                  <button>Watch now</button>
                </a>
              </div>
            </li>
          );
    
}