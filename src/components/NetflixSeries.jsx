import SeriesData from "../api/SeriesData.json";
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
  return (
    <ul>
      {SeriesData.map((curr_elem) => (
        <SeriesCard key={curr_elem.id} curr_elem={curr_elem} />
      ))}
    </ul>
  );
};
