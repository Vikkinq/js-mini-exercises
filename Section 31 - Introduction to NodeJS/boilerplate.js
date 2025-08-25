const fs = require("fs");
const folderName = process.argv[2] || "Project";

// console.log(fs);

// fs.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("IN THE CALL");
//   if (err) throw err;
// });

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(
    `${folderName}/index.html`,
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <script src="app.js"></script>
</body>
</html>`
  );
  fs.writeFileSync(`${folderName}/style.css`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
} catch (err) {
  console.log("REJECTED", err);
}

// console.log("AFTER");
