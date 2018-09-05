/**
  * Script to convert output HTML in PDFs
  * Usage:
  *
  *    node html-to-pdf
  *
  *  You need to configure settings vars
  *
  * Disclaimer
  * This script does not many validations such as if file exists etc.
  *
  */


var fs = require('fs');
var pdf = require('html-pdf');

//Script settings
var htmlBaseDir = "../_site/"; // relative dir from script file path.
var htmlFiles = ['guidelines', 'developer-docs']; //paths (without html extension) from htmlBaseDir
var pdfOutputDir = '../_site/assets/pdf/'; //ouput dir will have same structure as htmlBaseDir.

// html-pdf options settings
// More info on https://github.com/marcbachmann/node-html-pdf
// and
var options = {
    format: 'A2', // Unfortunately, A4 / Letter has issues with bootstrap print media.
                  // More options in http://phantomjs.org/api/webpage/property/paper-size.html
    phantomPath: '../node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs', //path to phantomjs bin
    base: 'file:///' + __dirname + '/' + htmlBaseDir, //required to load CSS
    width: "1440px"
  };
console.log(options);

for (var i = 0; i< htmlFiles.length; i++ ) {
  var htmlFile = htmlFiles[i];
  console.log('Generating ' + htmlFile);
  var html = fs.readFileSync(htmlBaseDir + htmlFile + '.html', 'utf8');
  pdf.create(html, options).toFile(pdfOutputDir + htmlFile + '.pdf', function(err, res) {
  if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });
}
