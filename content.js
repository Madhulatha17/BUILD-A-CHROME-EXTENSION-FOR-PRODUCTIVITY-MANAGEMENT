const blockedSites = [
  "facebook.com",
  "instagram.com"
];

if (
 blockedSites.some(site =>
 location.hostname.includes(site))
){
 document.body.innerHTML =
 "<h1>Site Blocked</h1>";
}
