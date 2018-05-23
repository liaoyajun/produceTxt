var fs = require('fs');
var shell = require("shelljs");
console.log('\033[2J');
var sourceArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var maxvalue = sourceArr.length - 1;
var time = new Date();
function formDate(ms) {
    var s = parseInt(ms / 1000);
    var min = Math.floor(s / 60);
    s = s - 60 * min;
    return '\n 用时' + min + '分' + s + '秒';
}
function main(aa, bb, cc, dd, ee) {
    var strArr = []
    var count = 0
    for (var a = aa; a < sourceArr.length; a++, bb=0) {
        for (var b = bb; b < sourceArr.length; b++, cc=0) {
            for (var c = cc; c < sourceArr.length; c++, dd=0) {
                for (var d = dd; d < sourceArr.length; d++, ee=0) {
                    for (var e = ee; e < sourceArr.length; e++) {
                        strArr.push('' + sourceArr[a] + sourceArr[b] + sourceArr[c] + sourceArr[d] + sourceArr[e])
                        count++;
                        if (count == 1000000) {
                            var str = strArr.join('\n') + '\n'
                            fs.appendFile('/Users/liaoyajun/lab/其他/produceTxt/password/password05.txt', str, function(err) {
                                e = e + 1;
                                if (e > maxvalue) {
                                    e = 0;
                                    d = d + 1;
                                    if (d > maxvalue) {
                                        d = 0;
                                        c = c + 1;
                                        if (c > maxvalue) {
                                            c = 0;
                                            b = b + 1;
                                            if (b > maxvalue) {
                                                b = 0;
                                                a = a + 1;
                                                if (a > maxvalue) {
                                                    console.log(formDate(new Date() - time));
                                                    console.log('\033[32m \n5位全部执行完毕 \033[0m');
                                                    setTimeout(function() {
                                                        // shell.exec("node /Users/liaoyajun/lab/其他/produceTxt/index06.js");
                                                    }, 2000);
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                }
                                process.stdout.write('\033[33m==> ' + (a > 9 ? a : ' ' + a) + ' ' + (b > 9 ? b : ' ' + b) + ' ' + (c > 9 ? c : ' ' + c) + ' ' + (d > 9 ? d : ' ' + d) + ' ' + (e > 9 ? e : ' ' + e) + ' \033[0m');
                                main(a, b, c, d, e);
                            });
                            return
                        }
                        if (a == maxvalue && b == maxvalue && c == maxvalue && d == maxvalue && e == maxvalue) {
                            var str = strArr.join('\n') + '\n'
                            fs.appendFile('/Users/liaoyajun/lab/其他/produceTxt/password/password05.txt', str, function(err) {
                                console.log(formDate(new Date() - time));
                                console.log('\033[32m \n5位全部执行完毕 \033[0m');
                                setTimeout(function() {
                                    // shell.exec("node /Users/liaoyajun/lab/其他/produceTxt/index06.js");
                                }, 2000);
                                return;
                            });
                            return
                        }
                    }
                }
            }
        }
    }
}

fs.writeFile('/Users/liaoyajun/lab/其他/produceTxt/password/password05.txt', '', function(err) {
    console.log('\033[32m 5位清空数据 \033[0m');
    main(0, 0, 0, 0, 0);
});
