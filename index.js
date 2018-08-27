const sha256 = require('sha256');
var QRCode = require('qrcode');
var crypto = require('crypto');
var fs = require('fs');
 
// var a = sha256('hello');
// QRCode.toDataURL(a, function (err, url) {
//     console.log(url)
//   })
// change the algo to sha1, sha256 etc according to your requirements

var algo = 'sha256';
var shasum = crypto.createHash(algo);
  
var file = 'D:/Wallpapers/abc.jpg';
var s = fs.ReadStream(file);
s.on('data', function(d) { shasum.update(d); });
s.on('end', function() {
    var d = shasum.digest('hex');
    console.log(d);
    QRCode.toFile('qr.png', d, {
      color: {
        dark: '#00F',  // Blue dots
        light: '#0000' // Transparent background
      }
    }, function (err) {
    if (err) throw err;
       console.log('done');
      })
  });