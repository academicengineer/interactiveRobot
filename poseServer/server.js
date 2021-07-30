
//
const http = require('http');
const fs = require('fs');

// index.htmlを読み込むコールバック関数
const server = http.createServer(function(req,res){
    fs.readFile('./index.html', 'utf-8', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

//3000ポートを利用
server.listen(3100);
console.log('推定サーバを起動しました');