/*
Loop Structure
*/

var data = [];

for (var i = 0 ; i < 20; i++) {
	
	if (i % 2 == 0) {
		data = [i];	
		console.log(data);
	}
}

var text = "";
for (var i = 0; i <=20; i++) {
	if(i % 2 == 0){
		if (i == 20) {
			text = i;
			console.log(text);
		} else {
			text = i + " , ";
			console.log(text);
		}
	}
}