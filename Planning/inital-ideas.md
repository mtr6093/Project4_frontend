# Ideas for final project.
This is the list of ideas for my final project. A scaled down version of the Equipment tracker was chosen as it was easier to break into smaller pieces and still have a functioning app. See the UserStoryStatemnts.md file for a breakdown of the project.



## Cattle herd calving app
An application to track age, calving seasons, calving dates for a herd of cattle.

### outline
- Home page - Shows a header, navbar, footer
    * navbar has links to herd list and home
- Herd list page - shows a dropdown selector for filtering 
    * Filtering would have 4 selections: entire herd, spring calvers, fall calvers, bulls
        * each filter would show a list of ear tag numbers for cows belonging in that filtered section
- Spring calving list page - shows a list of all tag numbers for cows that are in the spring calving herd with form entries for "date calved" and "gender" with checkbox selection for being tagged.

- Fall calving list page - shows same data as spring calving list except for cows in fall calving herd.

- Bull page - shows a list of all tag numbers for bulls in the herd

From all pages selecting a tag number would navigate to a cow details page that would show date born or purchased for the cow, what calving herd it belongs to, the calving dates for all calves born, gender of all calves born.


 

# The Equipment Maintenance Tracking App
An application to track engine hours at time of service for engine oil/filter, hydraulic filter, fuel filter, Engine Air Filter, Cabin Air Filter, Front Differential oil, Final Drive oil, Reverser oil

### outline
- Home page - Shows a header, navbar, footer
    * navbar has links to equipment list, login, and home
- Equipment list page -  if signed in shows a list of equipment entered by the user. Each model number is selectable and navigates to the model details page. Has a way to enter new equipment
- Model details page shows engine hours for the last service of all items
    * allows for entry of new service readings 
    * allows for deleting the model