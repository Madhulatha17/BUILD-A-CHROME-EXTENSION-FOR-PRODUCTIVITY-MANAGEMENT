import {useEffect,useState}
from "react";

import axios from "axios";

function Dashboard(){

 const [report,setReport]
 = useState({});

 useEffect(()=>{

  axios
  .get(
   "http://localhost:5000/api/activity/report"
  )
  .then(res =>
   setReport(res.data)
  );

 },[]);

 return(

  <div>

   <h1>
    Productivity Dashboard
   </h1>

   <h2>
    Sites Visited:
    {report.totalSites}
   </h2>

   <h2>
    Total Time:
    {report.totalTime}
    sec
   </h2>

  </div>

 );

}

export default Dashboard;
