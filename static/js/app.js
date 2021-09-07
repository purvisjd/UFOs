// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

//build function to iterate through table data
function buildTable(data) {
    //first clear out existing data
    tbody.html("");

    //next, loop through each object in data and append row and cells for each value in row
    data.forEach((dataRow) => {
        //append a row to the table body
        let row = tbody.append("tr");

        //loop through each field in dataRow and add each value as cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}


function handleClick() {
    //grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check to see if a date was entered and filter data using that date
    if (date) {
        //apply filter to table data
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    //rebuild table using filtered data; if no date entered, return original tabledata
    buildTable(filteredData);
};


//attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//build the table when the page loads
buildTable(tableData);
