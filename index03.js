var fs = require('fs');
var shell = require("shelljs");
console.log('\033[2J');
var sourceArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var maxvalue = sourceArr.length - 1;

function main(aa, bb, cc) {
    var strArr = []
    var count = 0
    for (var a = aa; a < sourceArr.length; a++, bb=0) {
        for (var b = bb; b < sourceArr.length; b++, cc=0) {
            for (var c = cc; c < sourceArr.length; c++) {
                strArr.push('' + sourceArr[a] + sourceArr[b] + sourceArr[c])
                count++;
                if (count == 1000000) {
                    var str = strArr.join('\n') + '\n'
                    fs.appendFile('/Users/liaoyajun/lab/其他/produceTxt/password/password03.txt', str, function(err) {
                        c = c + 1;
                        if (c > maxvalue) {
                            c = 0;
                            b = b + 1;
                            if (b > maxvalue) {
                                b = 0;
                                a = a + 1;
                                if (a > maxvalue) {
                                    console.log('\033[32m 三位全部执行完毕 \033[0m');
                                    shell.exec("node /Users/liaoyajun/lab/其他/produceTxt/index04.js");
                                    return;
                                }
                            }
                        }
                        main(a, b, c);
                    });
                    return
                }
                if (a == maxvalue && b == maxvalue && c == maxvalue) {
                    var str = strArr.join('\n') + '\n'
                    fs.appendFile('/Users/liaoyajun/lab/其他/produceTxt/password/password03.txt', str, function(err) {
                        console.log('\033[32m 三位全部执行完毕 \033[0m');
                        shell.exec("node /Users/liaoyajun/lab/其他/produceTxt/index04.js");
                    });
                    return
                }
            }
        }
    }
}

fs.writeFile('/Users/liaoyajun/lab/其他/produceTxt/password/password03.txt', '', function(err) {
    console.log('\033[32m 三位清空数据 \033[0m');
    main(0, 0, 0);
});
