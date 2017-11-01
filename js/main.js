var myArray = ['product utility', 'aesthetic', 'understandable', 'unobtrusive', 'honest', 'detail oriented', 'long-lasting', 'environmentally friendly', 'minimal'];
var currentIndex = 0
var timer = setInterval(function(){
	$("#selector").text(myArray[currentIndex] + '.');
	currentIndex++;
	if (currentIndex == myArray.length) {
		currentIndex = 0;
	}
 }, 4000);