const fs = require('fs');
const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name.'
    },
    {
        type: 'input',
        name: 'location',
        message: 'Please enter where your located.'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Please enter things to know about you.'
    },
    {
        type: 'input',
        name: 'linkdin',
        message: 'Please enter your LinkedIn URL.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub URL.'
    },
];

function generateHtml(data) {
    return ` <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="style.css" rel="stylesheet" type="text/css">
      <title>For...of</title>
    </head>
    <body>
    <h1>${data.name}</h1>
    </body>
    </html>
    `;
}


const htmlName = "index.html";
function writeHtml(htmlName, data) {
    const htmlFile = generateHtml(data);
    fs.writeFile(htmlName, htmlFile, err => {
        if(err) {
            console.log(err)
        }
        console.log('HTML Created.')
    })
}

function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        writeHtml(htmlName,data)
    })
}



init()