var fs = require('fs');
var shell = require("shelljs");
var count = 2;
count = count + 1;
fs.writeFile('/Users/liaoyajun/lab/其他/produceTxt/call2.js', 'var fs = require('fs');
var shell = require("shelljs");
var count = 2;
count = count + 1;
fs.writeFile('/Users/liaoyajun/lab/其他/produceTxt/call2.js', '', function(err) {
	console.log('\033[32m count是' + count + ' \033[32m');
	console.log('\033[32m 写入完成 \033[32m');
	shell.exec('node call2.js');
});', function(err) {
	console.log('\033[32m count是' + count + ' \033[32m');
	console.log('\033[32m 写入完成 \033[32m');
	shell.exec('node call2.js');
});