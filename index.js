const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');



app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files if needed
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Home Route
app.get("/", function (req, res) {
  fs.readdir("./files", function (err, files) {
    if (err) {
      console.error("Failed to read files folder:", err);
      return res.render("index", { files: [] });
    }
    res.render("index", { files: files });
  });
});

// View a file
app.get("/file/:filename", function (req, res) {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {
    if (err) return res.status(404).send("File not found");
    res.render("show", { filename: req.params.filename, filedata });
  });
});

// Edit note
app.get("/edit/:filename", function (req, res) {
  res.render("edit", { filename: req.params.filename });
});

app.post("/edit", function (req, res) {
  fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, function (err) {
    if (err) return res.status(500).send("Rename failed");
    res.redirect("/");
  });
});

// Create new note
app.post("/create", function (req, res) {
  fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function (err) {
    if (err) return res.status(500).send("Write failed");
    res.redirect("/");
  });
});

// Start server
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
