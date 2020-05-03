function printClock() {
    
    var clock = document.getElementById("clock");            
    var currentDate = new Date();                            
    var calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
    var amPm = '오전'; // 초기값 AM
    var currentHours = currentDate.getHours(); 
    var currentMinute = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();
    
    if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
    	amPm = '오후';
    	currentHours = addZeros(currentHours - 12);
    }
    if (currentSeconds <= 9) {
        currentSeconds = addZeros(currentSeconds);
    }
    if (currentMinute <= 9){
        currentMinute = addZeros(currentMinute);
        
    }


    clock.innerHTML = "<span class='amPm'>"+ amPm+"</span> " +"<span class='timezone'>"+ currentHours+":"+currentMinute+":"+currentSeconds+"</span> "; //날짜를 출력해 줌
    setTimeout("printClock()", 1000)  
    if (currentSeconds == 0) {
      setTimeout("location.reload()")
    }
}
function addZeros(num, digit) { // 자릿수 맞춰주기
	  var zero = 0;
	  num = num.toString();
	  if (num.length < digit) {
	    for (i = 0; i < digit - num.length; i++) {
	      zero += 0;
	    }
	  }
	  return zero + num;
}
