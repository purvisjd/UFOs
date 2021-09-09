# UFO Sighting Analysis:  Is the truth out there?

## Overview of Analysis:
The purpose of this project was to provide a Javascript based method for reviewing a data file of potential UFO sighting information.  The information was organized into a table that was created using a combination of HTML formatting and Javascript programming for functionality.  Users of this table can view all of the information provided in a visually pleasing format or they can filter the information based on a combination of the following criteria:  date of sighting, city of sighting, state of sighting, country of sighting, or shape of object sighted.

### Resources:
*  Data files used:
    *  [Sighting_Information](https://github.com/purvisjd/UFOs/blob/main/static/js/data.js)
    *  [Application_File](https://github.com/purvisjd/UFOs/blob/main/static/js/app.js)
    *  [HTML File](https://github.com/purvisjd/UFOs/blob/main/index.html)
    *  [Style Formatting](https://github.com/purvisjd/UFOs/blob/main/static/css/style.css)
*  Image Files used:
    *  [Background Image](https://github.com/purvisjd/UFOs/blob/main/static/images/nasa.jpg)
*  Software used:
    *  Javascript, HTML coding, VS Code

## Results of Analysis:
The webpage was designed so that an individual, be they "true believer" or "skeptic," could search a defined sataset of alleged UFO sightings, review that information, and draw conclusions for themselves.  Using a combination of HTML formatting and Javascript, the page was designed with a table to present the information in a more visually friendly format than the natural array format.  Should the end user be so inclined, they could simply view the data in its default format which would include the entire dataset.  Or, if the user wishes to view things in a more refined manner, the functionality was added so that they could limit the displayed results based on date, city, state, country, or shape of the object.  The code was designed in such a way so that the user would simply be able to enter the desired filter critiera into the appropriate field and then would be able to view the results.

When a user opens the webpage, the table and information default to the following:
![default_window](https://user-images.githubusercontent.com/85641017/132721102-8173aa27-61b6-41a6-b0d8-3831c3a41f43.png)

The user can then simply scroll through the entire list of data to find any particular entry that they may be looking for.  However, to increase the functionality of the page, filter options were added that would allow the user to refine their search based on the previously noted criteria.  As an example, if the user only wanted to see the results for the city of "benton", they would simply put that into the Enter City filter field.  Then, when the user tabs, or in some other way removes the focus from that window, the code is triggered in the background that will filter the results and reload the table based on the user's criteria.  

Here are some examples of how that may look:

Filtering by city:
![filter_by_city](https://user-images.githubusercontent.com/85641017/132721149-5203d19e-edaa-4b30-b3d9-a4da2701bacb.png)
Filtering by date:
![filter_by_date](https://user-images.githubusercontent.com/85641017/132721191-3f84bdf3-000d-4658-8260-17075b73f0e2.png)
To allow the user even more functionality to their search, the ability to filter by multiple factors was also included.  As with only searching by a single criteria, each time the focus is removed from the given filter field, the backend code runs and the table is reloaded based on the criteria.  Here are some examples of how filtering by multiple criteria may look to the end user:

Filter by Date and City:
![filter_by_city_and_date](https://user-images.githubusercontent.com/85641017/132721245-6a5a7abd-9d9c-4f25-a6b4-0c0f5f5e4949.png)
Filter by State and Shape:
![filter_by_state_and_shape](https://user-images.githubusercontent.com/85641017/132721295-bf56e92e-3b14-4aa8-a960-de1a939cbc32.png)
Users have the option of using any combination of the given filters to refine their searches.
## Summary:
One potential drawback for this current version of the webpage is the current design of the filtering options.  Some users may not be particularly comformatable with the search code running simply when they take the focus off oof the given search field.  They may lose track of what they had initially pulled up or, potentially, may simply have not been ready to launch the new filter.  A better design would be to combine the multiple field filter option with a specific "Filter" button to launch the code.  This allows the user to determine the particular moment when the new filter results will actually be displayed on the page.  The actual descriptions of the events exist in the "comment" section of the data and table.  Another significant potential improvement to the code, and therefore the functionality of the page, would be to include an additional filter option that would allow the user search for particular key words or phrases in the comments section.  If the user knew that they wanted to look for a particular type of event, but may not know where or when it could have occurred, this additional functionality would allow them to do just that.  Since the fundamental purpose of the webpage is for research, another significant improvement would be to include some sort of reporting or printing functionality that would allow the user to select particular entries and print the results.  
