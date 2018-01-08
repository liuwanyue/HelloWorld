let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./db/sliders');
let proGoods = require('./db/promationgoods');
let storeOthers = require('./db/storeothers');
let goodsList = require('./db/goods');
let goodsList1 = require('./db/allgoods');

function getGoods(cb) {
  fs.readFile('./db/allgoods.json','utf8',function (err,data) {
    if(err || data.length===0){
      cb([]);
    }else {
      cb(JSON.parse(data));
    }
  })
}
http.createServer(function (req,res) {
  console.log(1);
  let {query,pathname} = url.parse(req.url,true);
  if(pathname==='/api/sliders'){

    res.end(JSON.stringify(sliders));

 }else if(pathname==='/api/promationgoods'){
    res.end(JSON.stringify(proGoods));
  }else if(pathname==='/api/storeothers'){
    res.end(JSON.stringify(storeOthers));
  }else if(pathname==='/api/goodsList'){
    res.end(JSON.stringify(goodsList));
  }else if(pathname==='/api/getgoodslist'){
    let id = query.categoryid;
    //热销商品（1000）：所有商品中newAndhot=1;
    var arr=[];
      getGoods(function (goods) {
        if(id=='1000'){
          for (var i = 0; i < goods.length; i++) {
          var arrGoods = goods[i].goods;
          arrGoods.map(item=>{
            if(item.newAndhot){
              arr.push(item)
            }
          })
        }
          res.end(JSON.stringify(arr));
        }else {
          let obj = goods.find(item=>item.categoryId==id);
          res.end(JSON.stringify(obj));
        }
    });
  }

}).listen(5555);


