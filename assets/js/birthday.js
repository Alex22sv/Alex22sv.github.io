// Birthday countdown
// Credits: Code With Random (https://www.codewithrandom.com/)
(function () {  
	const second = 1000,  
	   minute = second * 60,  
	   hour = minute * 60,  
	   day = hour * 24;  
	//Avoid having to update year when the countdown is over
	let today = new Date(),  
	  dd = String(today.getDate()).padStart(2, "0"),  
	  mm = String(today.getMonth() + 1).padStart(2, "0"),  
	  yyyy = today.getFullYear(),  
	  nextYear = yyyy + 1,  
	  dayMonth = "06/22/",  
	  birthday = dayMonth + yyyy;  
	today = mm + "/" + dd + "/" + yyyy;  
	if (today > birthday) {  
	 birthday = dayMonth + nextYear;  
	}  

    //Countdown 
	const countDown = new Date(birthday).getTime(),  
    x = setInterval(function() {    
        const now = new Date().getTime(),  
        distance = countDown - now;  
        document.getElementById("days").innerText = Math.floor(distance / (day)),  
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),  
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),  
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);  
        //It's my birthday 
        if (distance < 0) {  
        document.getElementById("countdownTitle").style.display = "none"; 
        document.getElementById("countdownOverTitle").style.display = "block"; 
        document.getElementById("countdown").style.display = "none";  
        document.getElementById("emojiContent").classList.remove("hidden");  
        clearInterval(x);  
        }  
    //seconds  
    }, 0)  
}()); 