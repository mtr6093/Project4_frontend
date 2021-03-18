# The Equipment Maintenance Tracking App

This project is to assit in tracking maintenance records for farm equipment. Currently this app will track the engine hours when engine oil/filter, hydraulic filter, and fuel filter are changed.

## How This App Works

Navigate to the link listed in the links section below. The application will load a home page where a user can navigate to an equipment list. Once on the list page the user can add a piece of equipment to track or select a currently listed piece of equipment. When a currently entered piece of equipment is selected the page will change to a details page showing the engine hours at last service will be shown for engine oil/filter, hydraulic filter, and fuel filter. On the details each of the previously listed items can have the hours changed as well as remove a piece of equipment from the list.

![image](https://user-images.githubusercontent.com/74468626/111559126-f5c57980-875d-11eb-9d44-ba20ed5140bc.png)

### Links and Software Installations 

Link to the frontend application: https://marc-final-project-frontend.herokuapp.com/

This application does not require any software be installed on your device (phone, tablet, or computer); the entire application is hosted on a Heroku webserver.


## Known Issues
- The equipment details page does not respond well to a webpage refresh; and occasionally causes the application to crash. 
    * To recover navigate with the back button to the equipment list page, refresh the page, then re-select the piece of equipment you want to view.
- The entry fields for adding equipment and updating hours do not clear after the submit button is pressed. This is an entirely cosmetic issue and does not affect data entry.


## Future Enhancements
The items below are in scope for future enhancements along with fixing any known issues. Other requests for enhancements will be evaluated and added to the list below if approved.

- Create a way for users to login
- Make it so a user only sees their entered equipment (filter by userID)
- Add additional service items to track
    1. Engine Air Filter
    2. Cabin Air Filter
    3. Front Differential oil
    4. Final Drive oil
    5. Reverser oil
- Create a dropdown list for selecting the vehicle type
- Create a filtered list of equipment based on type


## Development Procedures
If you are interested in the planning stages of this project, including seeing the user stories this project was created for, please see the Planning folder in this repo.

## Why This Application?
This application was built as a final project for a General Assembly SEI class. The entire application, frontend and backend, was developed in one week. I chose to create this application because it fills a need for a family memeber's farming opperation.



## Technologies Used in the Development of This Project
The following technologies/software was used in the development of this application. 

- Visual Studio Code
- HTMl 5
- Javascript ES6
- CSS
- RESTful routes
- Full CRUD
- Node/Express (for backend)
- React-Router (for frontend)


© 2021 Marc Rivers 