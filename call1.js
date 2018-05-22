var time
var shell = require("shelljs");
var fs = require('fs');
fs.readFile('/Users/liaoyajun/lab/其他/produceTxt/call1.js', {flag: 'r+', encoding: 'utf8'}, function(err, data) {
  fs.writeFile('/Users/liaoyajun/lab/其他/produceTxt/call1.js', data + 'time = \'' + new Date() + '\'\n', function(err) {
      if(err) {
          return console.log(err);
      }
      console.log('\033[32m 写入完成，一秒后执行我寄己 \033[32m');
      setTimeout(function() {
        shell.exec("node /Users/liaoyajun/lab/其他/produceTxt/call1.js");
      }, 1000);
  });
})
