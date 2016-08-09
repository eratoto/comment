





function getInfo() {
	var name = document.getElementById("username").value
	var nameText = document.createTextNode(name)
	var title = document.createElement("h3")
	title.appendChild(nameText)
	
	var commentIn = document.getElementById("comment").value
	var commentText = document.createTextNode(commentIn)
	var para = document.createElement("p")
	para.appendChild(commentText)

	var newImage = document.getElementById("inputImage").value
	var display = document.createElement("img")
	display.setAttribute("src", newImage)

	var d = new Date()
	var dateLine = document.createElement("p")
	dateLine.innerHTML = d
	var dateTitle = document.createElement("h5")
	dateTitle.appendChild(dateLine)

	var newItems = document.createElement("li")
	newItems.className = "createdList"
	newItems.appendChild(title)
	newItems.appendChild(para)
	newItems.appendChild(display)
	newItems.appendChild(dateTitle)

	document.getElementById("newList").appendChild(newItems)
}





























