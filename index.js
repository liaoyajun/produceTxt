var fs = require('fs');

// var sourceArr = ['', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var sourceArr = [0,1];
var maxvalue = sourceArr.length - 1;

function main(aa, bb, cc, dd, ee, ff, gg, hh) {
    var strArr = []
    var count = 0
    for (var a = aa; a < sourceArr.length; a++, bb=0) {
        for (var b = bb; b < sourceArr.length; b++, cc=0) {
            for (var c = cc; c < sourceArr.length; c++, dd=0) {
                for (var d = dd; d < sourceArr.length; d++, ee=0) {
                    for (var e = ee; e < sourceArr.length; e++, ff=0) {
                        for (var f = ff; f < sourceArr.length; f++, gg=0) {
                            for (var g = gg; g < sourceArr.length; g++, hh=0) {
                                for (var h = hh; h < sourceArr.length; h++) {
                                    strArr.push('' + sourceArr[a] + sourceArr[b] + sourceArr[c] + sourceArr[d] + sourceArr[e] + sourceArr[f] + sourceArr[g] + sourceArr[h])
                                    count++;
                                    if (count == 10) {
                                        var str = strArr.join('\n') + '\n'
                                        fs.appendFile('/Users/liaoyajun/lab/github/produceTxt/password.txt', str, function(err) {
                                            if(err) {
                                                console.log('err=>>>>>>>>>>>>>>>>>>>>>');
                                                return console.log(err);
                                            }
                                            h = h + 1;
                                            if (h > maxvalue) {
                                                h = 0;
                                                g = g + 1;
                                                if (g > maxvalue) {
                                                    g = 0;
                                                    f = f + 1;
                                                    if (f > maxvalue) {
                                                        f = 0;
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
                                                                            return;
                                                                        }
                                                                    }

                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            console.log('\033[32m 写入完成，继续执行，开始位置' + a + ',' + b + ','  + c + ','  + d + ','  + e + ','  + f + ','  + g + ','  + h + '\033[32m');
                                            main(a, b, c, d, e, f, g, h)
                                        });
                                        return
                                    }
                                    if (a == maxvalue && b == maxvalue && c == maxvalue && d == maxvalue && e == maxvalue && f == maxvalue && g == maxvalue && h == maxvalue) {
                                        var str = strArr.join('\n') + '\n'
                                        fs.appendFile('/Users/liaoyajun/lab/github/produceTxt/password.txt', str, function(err) {
                                            if(err) {
                                                console.log('err=>>>>>>>>>>>>>>>>>>>>>');
                                                return console.log(err);
                                            }
                                            console.log('\033[32m 全部执行完毕 \033[32m');
                                        });
                                        return
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
main(0, 0, 0, 0, 0, 0, 0, 0)
