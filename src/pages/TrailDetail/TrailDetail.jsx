import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'; 
import * as trailAPI from "../../utils/trailService"

function TrailDetail(props) {
  // const [details, setDetails] = useState(null);

  // const { id } = useParams();

  // useEffect(() => {
  //   trailAPI.getOne(id).then(res => setDetails(res))
  // }, [id]); 

  return (
    // details && (
      <>
        {/* <h1>{props.trail.name}</h1> */}
        hello world
        </>
    // )
  );
}

export default TrailDetail;

