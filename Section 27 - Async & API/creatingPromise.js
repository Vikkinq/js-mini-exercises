const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("SUCCESS YOUR ASS");
        console.log(rand);
      }
      reject("ERROR YOU ASS");
    }, 1000);
  });
};

fakeRequest("rust/gamer/page1")
  .then((data) => {
    console.log("SUCCESS!");
    console.log(data);
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err);
  });
