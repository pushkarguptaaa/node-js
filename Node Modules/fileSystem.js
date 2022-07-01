// NODE FOLDER SETUP

const fs = require("fs");
const http = require("http");
const folderName = "public";
// console.log(fs);

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log("folder made");
  } else {
    console.log("folder exists");
  }
} catch (err) {
  console.log(err);
}
const folderPath = `./${folderName}`;

fs.writeFile(folderPath + "/index2.html", "<h1>Hello World</h1>", (err) => {
  if (err) throw err;
  console.log("file created");
});
let val1 = fs.readdirSync(folderPath);
console.log(val1);
// console.clear();

// FILE SYSTEM MODULE

let tempCounter = 1;
let newFileName = `new${tempCounter}.html`;

function maker() {
  for (let i = 0; i < 5; i++) {
    fs.readdir(folderPath, (err, files) => {
      console.log(files);
      console.log(files.length);
      console.log(err);
      tempCounter = files.length + i + 1;
      newFileName = `new${tempCounter}.html`;
      createNewFile(newFileName);
    });
  }
}
function createNewFile(fileName) {
  const html = `<h1> ${tempCounter} </h1>`;
  fs.appendFile(folderPath + "/" + fileName, html, (err) => {
    if (err) throw err;
    console.log(`Save File ${fileName}`);
  });
}
// maker();

// UPDATE THE CONTENTS OF A FILE
// overMyLog("test");

// MyLog("test2");

function overMyLog(val) {
  const html = `- ${val}`;
  fs.writeFile(folderPath + "/log.html", html, (err) => {
    if (err) throw err;
    console.log(`Updated Write File ${val}`);
  });
}

function MyLog(val) {
  const html = `<br> * ${val}`;
  fs.appendFile(folderPath + "/log.html", html, (err) => {
    if (err) throw err;
    console.log(`*Appended ${val}`);
  });
}

// DELETE FILES USING THE FILE SYSTEM

// deleteFile(folderPath + "/.DS_Store");
function deleteFile(val) {
  fs.unlink(val, (err) => {
    if (err) throw err;
    console.log(`File Deleted ${val}`);
  });
}

// removeAll();
function removeAll() {
  fs.readdir(folderPath, (err, files) => {
    files.forEach((myFile) => {
      deleteFile(folderPath + "/" + myFile);
    });
  });
}

// RENAME FILES USING NODE

function renameFile(fileName, newName) {
  fs.rename(fileName, newName, (err) => {
    if (err) throw err;
    console.log(`File Renamed - ${newName} from ${fileName}`);
  });
}
function renameAll() {
  fs.readdir(folderPath, (err, files) => {
    files.forEach((myFile, ind) => {
      renameFile(folderPath + "/" + myFile, `${folderPath}/new${ind}.html`);
    });
  });
}
// renameAll();

// FILE SYSTEM STATS

const mainFile = "new0.html";
const url = `${folderPath}/${mainFile}`;
console.log(url);

http
  .createServer((req, res) => {
    fs.readFile(url, (err, html) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      return res.end();
    });
    console.log("server running");
  })
  .listen(8080);

const rs = fs.createReadStream(url);
rs.on("open", (e) => {
  console.log("File is open");
  let val = "<br> opened";
  // updateFile(val);
});
function updateFile(val) {
  fs.appendFile(url, val, (err) => {
    if (err) throw err;
    console.log("updated file");
  });
}

fs.stat(url, (err, stats) => {
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.size);
});

// FILE SYSTEM READ FILES

const fileName = folderPath + "/test.txt";
const data = fs.readFileSync(fileName, "utf-8");
console.log(data);
const arr = ["red", "blue", "green"];

function addMe(data) {
  fs.appendFile(folderPath + "/test.txt", `\n ${data}`, (err) => {
    if (err) throw err;
    console.log("done");
  });
}
arr.forEach((el) => {
  // addMe(el);
});

// FILE AND FOLDER PATHS

const path = require("path");
const dir = "public";
const fileName1 = "new1.html";
const url1 = path.join("/", ".", dir, fileName1);
console.log(url1);
console.log(path.dirname(url1));
console.log(path.basename(url1));
console.log(path.extname(url1));
const info = path.resolve(fileName1);
console.log(info);
