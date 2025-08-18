// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};
// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
fakeRequestPromise("pisotpitotoy.com/api/pisotoy/page1")
  .then((data) => {
    console.log("Success Page 1");
    console.log(data);
    return fakeRequestPromise("pisotpitotoy.com/api/pisotoy/page2");
  })
  .then((data) => {
    console.log("Success Page 2");
    console.log(data);
    return fakeRequestPromise("pisotpitotoy.com/api/pisotoy/page3");
  })
  .then((data) => {
    console.log("Success Page 3");
    console.log(data);
  })
  .catch((err) => {
    console.log("FAILED!");
    console.log(err);
  });
