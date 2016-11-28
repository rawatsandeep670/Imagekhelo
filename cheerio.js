var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://www.justdial.com/Delhi-NCR/Gents-Tailors/ct-1372#";
var fs = require("fs");

request(url, function (error, response, body) {
  if (!error) {
        var $ = cheerio.load(body),
        items = $(".rslwrp ul.rsl>li"), name = null;
        var arr = [];
        for(var i=0; i<items.length; i++){
            var obj = {
                name : items.eq(i).find(".store-name .jcn>a").html(),
                contactNumber : items.eq(i).find(".contact-info a>b").html(),
                fullAddressInfo : items.eq(i).find(".address-info a span").text(),
                estInfo : items.eq(i).find(".est-info .year").text(),
                rating : items.eq(i).find(".last .rt_count").text(),
                workInfo :  items.eq(i).find(".address-info.adinfoex .bld").text(),
                otherInfo : items.eq(i).find(".address-info.adinfoex .a:first-child").text(),
                coverImage : items.eq(i).find(".thumb_img a[title]").html()
                
            }
            arr.push(obj);
        }
        fs.writeFile('myDbdata.txt', JSON.stringify(arr),  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("Data written successfully!");
        });
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});