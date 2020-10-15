import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom'; 
// import * as trailAPI from "../../utils/trailService"

function TrailDetail(props) {
  // const [details, setDetails] = useState(null);

  // const { id } = useParams();

  // useEffect(() => {
  //   trailAPI.getOne(id).then(res => setDetails(res))
  // }, [id]); 
  let trail = props.history.location.state.trail; 
  return (
    // details && (
      <>
      <h1>{trail.name}</h1>
      <h2>{trail.location}</h2>
        </>
    )
  // );
}

export default TrailDetail;

