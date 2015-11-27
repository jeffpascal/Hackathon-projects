var text = document.getElementById("sourcecode");
var code = text.innerHTML;
var i = 0;
var k = prompt (" Speed ", 2);
var display = 1;

addEventListener("keypress", function(){

	document.getElementById("sourcecode2").innerHTML += code[i];
	i++;

	while(i % k != 0)
	{
		document.getElementById("sourcecode2").innerHTML += code[i];
		i++;
		document.getElementById( "bottom" ).scrollIntoView();
	}
})

setInterval(
     function(){   
          display = !display;
		  var element = document.getElementById("line");
		  if(display)
			element.innerHTML = "<span>|</span>";
		  else 
		    innerHTML = "";
     },
     1000  /* 10000 ms = 10 sec */
);
