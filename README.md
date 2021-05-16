# Weekend-Movie-Sagas


## Description

Duration: Weekend Sprint

In this project I created a movie app that allows users to be able to view movie posters and info and be able edit movies and add more! I utilized separate components to display different information with there being 4 views total: a movie list, a details page, a page to add a new movie, and a page to edit an existing movie. Each of these views required the passing and retrieving of different information from redux reducers, sagas, and routes to and from the database. On the list view, a user is able to see the movie posters all displayed on a grid and click a poster to view its details. On the details page the movie poster is shown along with the title, genres related to the movie, and a description of the movie. The user then has the option to either return back to the list of movies or edit movie's information. From the movie edit page, the user can make changes to the title and description of the movie and hit save to commit the changes and send them to the database via a saga and PUT route, or return back to the detail page of that movie without any changes committed. Lastly, the user can also add a new movie which requires you to input a title, url, description, and genre related to that movie. The save button commits these changes to the database via a saga and then a POST route and the cancel button returns the user to the list page.

## Screen Shot

<img src="public/images/Screen Shot 2021-05-16 at 5.33.03 PM.png">
<img src="public/images/Screen Shot 2021-05-16 at 5.33.10 PM.png">
<img src="public/images/Screen Shot 2021-05-16 at 5.33.19 PM.png">
<img src="public/images/Screen Shot 2021-05-16 at 5.33.28 PM.png">


### Prerequisites

- Node.js
- React.js 
- Redux
- Redux-Saga
- Material-UI https://material-ui.com/
- Postico


## Installation

To get this application running follow the directions below:

1: Create a database
2: Input the SQL queries from the database.sql file into Postico and execute those queries
3: Open up your editor of choice with the project files and run npm install and npm install pg
4: Next, run npm install @material-ui/core to access the Material-UI styling.
5: Then run npm server and open a second terminal window to run npm run client and browser window with the app should appear!

## Usage

1. Browse through the list of movies and click on one that you want to see more info on
2. From the info page either return to the home list or edit the info
3. If editing, decide to Save those changes or Cancel them - both will return you to the details page with whatever info was last stored from the database.
4. From the home list you may also choose to add another movie - click the 'Add Movie' button if so.
5. Input a title, poster url, description, and select a genre for the given movie and hit either Save or Cancel - both will return you to the home list.

## Built With
- React.js
- Redux
- Redux-Saga
- Material-UI


## Acknowledgement 
Thanks to Prime Digital Academy for giving me the knowledge and confidence to build this app and to try out some new things! Also many thanks to my lovely partner, Becky, for being cool with me staring at a screen for hours on end.

## Support
If you have suggestions or issues, please email me at raveryk@gmail.com
