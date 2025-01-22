import React from "react";
import { NetflixSeries } from "./components/NetflixSeries";
import "./components/Netflix.css"
export const App = () =>
{
return(  
<React.Fragment>
  <section className="container">
    <h1 className="header">Best Netflix Recommendations</h1>
    <NetflixSeries />
  </section>  
</React.Fragment>
  );
};

