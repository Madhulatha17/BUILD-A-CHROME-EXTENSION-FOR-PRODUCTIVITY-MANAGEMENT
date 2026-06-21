fetch("http://localhost:5000/api/activity/report")
.then(res => res.json())
.then(data => {

  document.getElementById("report")
  .innerHTML = `
  <p>Total Sites: ${data.totalSites}</p>
  <p>Total Time: ${data.totalTime} sec</p>
  `;
});
