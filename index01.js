var fs = require('fs');
var shell = require("shelljs");

var sourceArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var maxvalue = sourceArr.length - 1;

function main(aa) {
    var strArr = [];
    var count = 0;
    for (var a = aa; a < sourceArr.length; a++) {
        strArr.push('' + sourceArr[a])
        count++;
        if (count == 10) {
            var str = strArr.join('\n') + '\n'
            fs.appendFile('/Users/liaoyajun/lab/其他/produceTxt/password01.txt', str, function(err) {
                a = a + 1;
                if (a > maxvalue) {
                    console.log('\033[32m 全部执行完毕 \033[32m');
                    shell.exec("node /Users/liaoyajun/lab/其他/produceTxt/index02.js");
                    return;
                }
                console.log('\033[32m 写入完成，继续执行 \033[32m');
                main(a);
            });
            return
        }
        if (a == maxvalue) {
            var str = strArr.join('\n') + '\n'
            fs.appendFile('/Users/liaoyajun/lab/其他/produceTxt/password01.txt', str, function(err) {
                console.log('\033[32m 全部执行完毕 \033[32m');
                shell.exec("node /Users/liaoyajun/lab/其他/produceTxt/index02.js");
            });
            return
        }
    }
}

fs.writeFile('/Users/liaoyajun/lab/其他/produceTxt/password01.txt', '', function(err) {
    console.log('\033[32m 清空数据 \033[32m');
    main(0);
});
