function printClock() {
    
    var clock = document.getElementById("clock");            
    var currentDate = new Date();                            
    var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
    var amPm = '오전'; // 초기값 AM
    var currentHours = addZeros(currentDate.getHours()); 
    var currentMinute = addZeros(currentDate.getMinutes());
    var currentSeconds =  addZeros(currentDate.getSeconds());
    
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


    clock.innerHTML = "<span style='font-size:50px;'>"+ amPm+"</span> " +"<span class=' timezone'>"+ currentHours+":"+currentMinute+":"+currentSeconds+"</span> "; //날짜를 출력해 줌
    
    setTimeout("printClock()",1000);         // 1초마다 printClock() 함수 호출
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
