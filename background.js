let currentSite = "";
let startTime = Date.now();

chrome.tabs.onActivated.addListener(async (activeInfo) => {

  const tab = await chrome.tabs.get(activeInfo.tabId);

  const url = new URL(tab.url);

  const domain = url.hostname;

  if (currentSite !== "") {

    const duration =
      Math.floor((Date.now() - startTime) / 1000);

    fetch("http://localhost:5000/api/activity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        website: currentSite,
        duration
      })
    });
  }

  currentSite = domain;
  startTime = Date.now();
});
