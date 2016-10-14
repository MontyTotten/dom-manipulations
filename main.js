
document.querySelector("#thanks button").addEventListener('click',function(){
	alert("yowch! don't click me so hard!");
})

document.querySelector("#double button").addEventListener('click',function(){
	var cpInv = document.getElementById('compoundInvestment');
	cpInv.textContent = cpInv.textContent * 2;
})
            

document.querySelector("#color-circle button").addEventListener('click',function(){
	var circleBw = document.getElementById('circle-bw');
	if (circleBw.style.backgroundColor === 'white' || circleBw.style.backgroundColor === '') {
		circleBw.style.backgroundColor = 'black';
	} else {
		circleBw.style.backgroundColor = 'white';
	}
})

document.querySelector("#blow-up button").addEventListener('click',function(){
	var redCircle = document.getElementsByClassName('circle-red')[0];
	var width = redCircle.clientWidth;
	
	if (width >= 320) {
		redCircle.style.width = '40px';
		redCircle.style.height = '40px';
	} else {
			redCircle.style.width = width * 2 + 'px';
			redCircle.style.height = width * 2 + 'px';
		}
	
})

document.querySelector("#remove button").addEventListener('click',function(){
	var list = document.getElementById('userList');
	for (var i = list.children.length - 1; i >= 0; i--) {
		if (list.children[i].textContent[0] === 'i') {
			list.children[i].parentElement.removeChild(list.children[i]);
		}
	}

})

document.querySelector("#reverse-squares button").addEventListener('click',function(){
	var squares = document.getElementById('reverse-squares');
	var answerBox = squares.getElementsByClassName('answer-box')[0];
	for (var i = answerBox.children.length - 1; i >= 0; i--) {
		answerBox.appendChild(answerBox.children[i]);
	}
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
	var taskList = document.getElementById('tasks');
	
	var result

	for (var i = 0; i < taskList.children.length; i++) {
		result = '';
		for (var j = taskList.children[i].textContent.length -1; j >= 0; j--) {
			result += taskList.children[i].textContent[j]; 
		}
		taskList.children[i].textContent = result;
	}	
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
	var img = document.getElementById('city-img'); 
	var url = img.src; // (img.getAttribute('src'))
	var base = url.slice(0, 35);
	var n = parseInt(url.slice(35)); // +url.slice(35); // Number(url.slice(35))
	if (n >= 10) {
			n = 0;
		}
	url = base + (n + 1);
		


	img.src = url;
})









// var segments = img.src.split("/");
// 	var n = segments[segments.length - 1];
// 	segments[segments.length -1] = n + (1);







