// from data.js
var tableData = data;

// YOUR CODE HERE!
const submit = d3.select("#filter-btn")
submit.on("click",function(){
	d3.event.preventDefault()
	const inputElement = d3.select("#datetime")
	const inputValue = inputElement.property("value")
const filtered = tableData.filter(sighting => sighting.datetime === inputValue)

const tableBody = d3.select("tbody")
tableBody.text("")

filtered.forEach(sighting => {
	const newRow = tableBody.append("tr")
	newRow.append("td").text(sighting.datetime)
	newRow.append("td").text(sighting.city)
	newRow.append("td").text(sighting.state)
	newRow.append("td").text(sighting.country)
	newRow.append("td").text(sighting.shape)
	newRow.append("td").text(sighting.durationMinutes)
	newRow.append("td").text(sighting.comments)
})
});