// YOUR CODE HERE!
const submit = d3.select("#filter-btn")
submit.on("click",function(){
	// from data.js
	//Resets the data when a new submission is made
	var tableData = data
	//prevents page refresh
	d3.event.preventDefault()
	//pull in all values. Trim whitespace and toLowerCase for matching ease.
	const inputDate = d3.select("#datetime")
	const dateValue = inputDate.property("value").trim()
	const inputCity = d3.select("#city")
	const cityValue = inputCity.property("value").trim().toLowerCase()
	const inputState = d3.select("#state")
	const stateValue = inputState.property("value").trim().toLowerCase()
	const inputCountry = d3.select("#country")
	const countryValue = inputCountry.property("value").trim().toLowerCase()
	const inputShape = d3.select("#shape")
	const shapeValue = inputShape.property("value").trim().toLowerCase()
	//check if values have been entered and if so filter
	if (dateValue != ""){
		tableData = tableData.filter(sighting => sighting.datetime === dateValue)
	}
	if (cityValue != ""){
		tableData = tableData.filter(sighting => sighting.city === cityValue)
	}
	if (stateValue != ""){
		tableData = tableData.filter(sighting => sighting.state === stateValue)
	}
	if (countryValue != ""){
		tableData = tableData.filter(sighting => sighting.country === countryValue)
	}
	if (shapeValue != ""){
		tableData = tableData.filter(sighting => sighting.shape === shapeValue)
	}
	//select table
	const tableBody = d3.select("tbody")
	tableBody.text("")
	//loop through tableData post-filter and push data to new rows
	tableData.forEach(sighting => {
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