var fs = require('fs')
var express = require('express')
var app = express();
var timepage = require('./lib/timepage.js')
var timecore = require('./public/time_core.js')
var path = require('path')
var helemt = require('helmet')
var compression = require('compression')
app.use(compression());
app.use(express.static('public'))

app.get('/', function(request, response){
    var currentDate = new Date();       
    var currentHours = addZeros(currentDate.getHours()); 
    var currentMinute = addZeros(currentDate.getMinutes());
    var currentSeconds =  addZeros(currentDate.getSeconds());
    var amPm = '오전'; // 초기값 AM
    if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
    	amPm = '오후';
    	currentHours = addZeros(currentHours - 12);
    }
    if (currentSeconds <= 9) {
        currentSeconds = addZeros("0" + currentSeconds);
    }
    if (currentMinute <= 9){
        currentMinute = addZeros("0" + currentMinute);
        
    }
    function addZeros(num, digit) { // 자릿수 맞춰주기
        var zero = '';
        num = num.toString();
        if (num.length < digit) {
          for (i = 0; i < digit - num.length; i++) {
            zero += '0';
          }
        }
        return zero + num;
    }
    var title = amPm + " " + currentHours + ":" + currentMinute

    var main_index = timepage.HTML(title)
    response.send(main_index)
})

app.listen(3000, function() {
    console.log("Example app is running on port 3000");
});
