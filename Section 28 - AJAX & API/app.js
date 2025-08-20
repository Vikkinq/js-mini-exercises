fetch("https://catfact.ninja/fact ")
  .then((req) => {
    console.log("RESOLVED", req);
    return req.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("REJECTED", err);
  });
