// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

//build function to iterate through table data
function buildTable(data) {
    // clear any existing data from the table
    tbody.html("");

    //loop through each object in data and append row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick(){
    //Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check to see if a date was entered and filter data using that date
    if (date) {
        //apply filter to the table data to only keep rows where datetime value matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild the table using the filtered data
    //if no date was entered, then filteredData will just be original tableData
    buildTable(filteredData);
};

//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

??build the table when the page loads
buildTable(tableData);
