//Required package
var pdf = require("pdf-creator-node");
var fs = require('fs');

// Read HTML Template
var html = fs.readFileSync('template.html', 'utf8');

var pdfOptions = {
    format: "A4",
    orientation: "portrait",
    //orientation: "landscape",
    border: "10mm"
};


var users = [{
        name:"André Gomes",
        age:"42" 
    }, {
        name:"Navjot",
        age:"22" 
    }, {
        name:"Vitthal",
        age:"35" 
    }
]

var document = {
    html: html,
    data: {
        users: users
    },
    path: "./output.pdf"
};

console.log(document);
pdf.create(document, pdfOptions)
.then(res => {
    console.log(res)
})
.catch(error => {
    console.error(error)
});