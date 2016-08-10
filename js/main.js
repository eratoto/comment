





function getInfo() {
	//declare a variable for the name. Creates a "h3" tag and a textnode.
	//converts the name to texdtnode and appends it to the "h3" tag.
	var name = document.getElementById("username").value
	var nameText = document.createTextNode(name)
	var title = document.createElement("h3")
	title.appendChild(nameText)
	
	//declare a variable for the comment. Creates a "p" tag and a textnode. 
	//converts the comment to textnode and appends it to the "p" tag.
	var commentIn = document.getElementById("comment").value
	var commentText = document.createTextNode(commentIn)
	var para = document.createElement("p")
	para.appendChild(commentText)

	//declare a variable for the user input image. Creates a "img" tag and 
	//sets the attribute for the "img" tag.
	var newImage = document.getElementById("inputImage").value
	var display = document.createElement("img")
	display.setAttribute("src", newImage)

	//date input
	var d = new Date()
	var dateLine = document.createElement("p")
	dateLine.innerHTML = d
	var dateTitle = document.createElement("h5")
	dateTitle.appendChild(dateLine)

	//name, comment, img and date is appended to the "li" tag
	var newItems = document.createElement("li")
	newItems.className = "createdList"
	newItems.appendChild(title)
	newItems.appendChild(para)
	newItems.appendChild(display)
	newItems.appendChild(dateTitle)

	//"li" is appeded to the "ul"
	document.getElementById("newList").appendChild(newItems)
}





























