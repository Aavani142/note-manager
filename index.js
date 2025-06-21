const express = require('express');
const app = express();
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function(_req, res) { 
    fs.readdir(`./files`,function(_err, files) {
        res.render("index", {files: files});
    })

});

app.get("/file/:filename", function(_req, res) { 
    fs.readFile(`./files/${_req.params.filename}`,"utf-8", function(_err, _filedata) {
        res.render('show', {filename: _req.params.filename,filedata: _filedata});
    });

});

app.get("/edit/:filename", function(_req, res) { 
    res.render('edit',{filename: _req.params.filename});

});

app.post("/edit", function(_req, res) { 
    fs.rename(`./files/${_req.body.previous}`, `./files/${_req.body.new}`, function(_err) {
        res.redirect("/");
    });

});

app.post('/create', function(req, res) { 
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(_err) {
        res.redirect("/");
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});