# Reception Management Dashboard Staff

### Front End Technologies Course Assignment for Noroff

This is my submission to the FET CA at Noroff Fagskole

### Project Details

for this project I had to create 5 specified JavaScript files:

1. welcome.js
2. table.js
3. aboutMe.js,
4. accessibility.js
5. contact.js

- We had to use the provided "index.html" file, and could not change or create our own HTML files.
- The JavaScript files had to make changes to the HTML file provided in the project folder.
- I had to use some Vanilla JavaScript, as well as more advanced jQuery and some CSS to make the changes asked in the task brief.
- To install the application, you need to download all the files, and run the index.html file from your program.
- The last changes made to this project was 21.05.2023.

## Required functionality in the Course Assignment project:

### welcome.js

- create one jQuery function that selects the HTML element with the “liveToastBtn” ID and shows the HTML Toast element with the ID of ‘liveToast’.
- This function should be run when the user clicks the ‘Like’ button in the HTML header.
- Make a copy of the ‘Like’ button element in the HTML file and place it directly after the existing ‘Like’ button element.
- Change the button text to “I’m Bored” and the element’s ID to “boredBtn”.
- In the same ‘welcome.js’ file, create another function that executes a GET Request,
  to the “http://boredapi.restapi.co.za/” API, once the new "I’m Bored” button is clicked.
- The response from this API Request should be logged into the web console.

### table.js:

- Create a ‘table.js’ file in the correct folder.
- Use this file to populate the Table in the ‘personal’ section as follows, using Vanilla JavaScript:
- Must have five rows of unique data (the data cannot be the same in each row).
- Populate the table with your chosen data relevant to the table headers.
- The Table needs to be populated from the 'table.js' file
- Icons should be used for the icon column. Here, any icons can be used, but no images are allowed. (You can use bootstrap icons)
- The following functionality needs to be implemented in the ‘table.js’ file, using jQuery:

1. When one of the images in the Table is clicked, the image must be displayed in a new window or tab in your web browser.
2. The table’s odd rows need to change font color when the mouse hovers over them, changing font color back to black once the mouse stops hovering over them. (Either the odd index or the odd numbered rows may be changed).

### aboutMe.js:

- Create an ‘aboutMe.js’ file in the correct folder.
- In this file, you must create a single function to update the ‘about me’ content.
- When the page loads, change all the text that says "Something about me" to something interesting about you - This could be anything, such as hobbies, what you like or do not like, your pet's names, or where you live (this information can be real or made up). All the "Something about me text" needs to be changed from this function.
- Change the "| student name |" to your student name in the about me section. (For example, it will read: Hello! I am John Smith, the code master.) This change should be done in the same function as the "something about me text" change.
- When you click the content in the "something about me" section that you have updated, the background color for the clicked element needs to change to powder-blue, and the font color needs to change to white.

### contact.js:

- Create a ‘contact.js’ file in the correct folder.

- In this file, you must create a single function with the following 3 variables:

1. email
2. telephone_number
3. address

- In the index.html file, in the ‘contact’ section, add a Button.
- When this button is clicked, the following should happen in the function created above:

1. Ask the user for information.

- You must store this information in the 3 variables created in the contact.js file.
- Make sure that data is received from the user input, and that it is in the correct format:
- (e.g., make sure the user enters an email address containing both a '@' and '.' ).

2.  Change the current contact information in the HTML file (email, telephone number, and address) ,

- to the input data from these 3 new variables.
- This must be done using jQuery selectors, without adding more HTML IDs to the ‘contact’ section.
- (The HTML file cannot be changed for this)

3.  Print the data entered to the console in the following format:

- From: email@emailaddress.co.za
- Contact: 0458754125
- Address: 12 Smith Road, John Park.

### Accessibility.js:

- Create an ‘accessibility.js’ file in the correct folder.
- In the Accessibility’ section, we have a visual aid for users who struggle to read small font in the form of a Toggle Switch.
- When the user clicks this Toggle Switch to the ‘On’ position, all text on the web page within <p> tags need to be increased by 20%.
- When the user clicks the Toggle Switch back to the ‘Off’ position, all text on the web page within <p> tags needs to be decreased back to the original size.
  -Create a single function in the file that accomplishes this.

### Contributors:

JavaScript: Camilla Seeland
All other files and code: Noroff Fagskole
