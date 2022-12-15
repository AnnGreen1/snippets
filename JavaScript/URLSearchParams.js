const params = new URLSearchParams(location.search.replace(/\?/gi, ""));
// location.search = "?name=test&sex=man"
params.has("test"); // true
params.get("sex");  //"man"
