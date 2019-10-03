var aliens = data;

var tbody = d3.select("tbody");


data.forEach((x) => {
  var row = tbody.append("tr");
  Object.entries(x).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


var button = d3.select("#filter-btn");

button.on ("click", function() {
	
	var inputElement = d3.select(".form-control");
	
	var inputValue = inputElement.property("value");
	
	
	var fileteredData = aliens.filter(alien => aliens.datetime === inputValue);
	
	//console.log(filteredData);
	
	list.html("");
	
	data.forEach((x) => {
		var row = tbody.append("tr");
		Object.entries(x).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(x);
		});
	});
	
});