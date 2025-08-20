// const loadCatFact = async () => {
//   const req = await fetch("https://catfact.ninja/fact");
//   const data = await req.json();
//   console.log(data);
// };

// loadCatFact();

// const loadCatFact = async () => {
//   try {
//     const req = await fetch("https://catfact.ninja/fact");
//     const data = await req.json();
//     console.log(data);
//   } catch (err) {
//     console.log("ERROR!!!", err);
//   }
// };

// loadCatFact();

// const loadCatFact = async () => {
//   try {
//     const req = await axios.get("https://catfact.ninja/fact");
//     console.log(req);
//   } catch (err) {
//     console.log("ERROR!!!", err);
//   }
// };

// loadCatFact();

// axios
//   .get("https://catfact.ninja/fact")
//   .then((req) => {
//     console.log("RESOLVED: ", req.data);
//   })
//   .catch((err) => {
//     console.log("ERROR! ", err);
//   });

const loadCatFact = async (id) => {
  try {
    const req = await axios.get(`https://catfact.ninja/${id}`);
    console.log(req.data);
  } catch (err) {
    console.log("ERROR!!!", err);
  }
};

loadCatFact("breeds");
