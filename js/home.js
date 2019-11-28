function abcd()
{
	document.getElementById("Navbar").style.visibility =
		document.getElementById("Navbar").style.visibility == "hidden" ? "visible" : "hidden";
}

document.addEventListener('DOMContentLoaded', function() {
	
	document.body.style.visibility = "hidden";
	window.addEventListener('load', (event) => {
		document.body.style.visibility = "visible";
		console.log("page loaded");
	});
	/*window.onload = function() {
		document.body.style.visibility = "visible";
		console.log("page loaded");
	};*/
	
	var testbutton = document.getElementById('testbutton');
	testbutton.addEventListener('click', function() { 
		abcd(); 
	});
	
	var navbarElements = document.querySelectorAll("div.NavbarElement");
	for(let obj of navbarElements)
	{
		if(obj.id == "ClubLogo")
			continue;
		obj.addEventListener('mouseover', function() { 
			obj.style.backgroundColor = "#dfdfdf"; 
		});
		obj.addEventListener('mouseout', function() {
			obj.style.backgroundColor = "#efefef";
		});
		
		obj.addEventListener('mousedown', function() { 
			obj.style.backgroundColor = "#cfcfcf";
		});
		obj.addEventListener('mouseup', function() {
			obj.style.backgroundColor = "#dfdfdf";
		});
		
		obj.addEventListener('click', function() {
			location.href = '/rankings';
		});
	}	
	console.log("button behavior loaded");
});