/*
    Timothy Willis
    2020-11-5
    Week2 Programming Lab 
*/

// Function will be called whenever the submit button is pressed.
function button_submit_onclick() {
    // Debug message
    console.log("button submit clicked");

    // Form variables
    var username_creation_form = document.getElementById('username_creation_form');
    var first_name = htmlEncode(username_creation_form.elements[0].value);
    var last_name = htmlEncode(username_creation_form.elements[1].value);
    var school_name = htmlEncode(username_creation_form.elements[2].value);

    // Display variables
    var username_msg = document.getElementById("username_msg");

    /* TODO Error variables
        Add check if user input is a valid name
        and unhide error message  
    */

    // Generate username from the user input
    var username = generate_username(first_name, last_name, school_name);
    
    // Add the generated username to the HTML
    username_msg.innerHTML = `You new username is ${username}`;
    
    // Unhide the username message
    unhide_element(username_msg);

}

// Function that returns the first character of a string
function get_first_character(string) {
    return string.charAt(0);
}

// Function that returns the first word of a string
// If the string is only one word, returns the whole string
function get_first_word(string) {
    return string.replace(/ .*/,'');
}


// Unhides an element with the "hidden" class in html
function unhide_element(element) {
    element.style.opacity = 1;
}

// Generates the username for the user
function generate_username(first_name, last_name, school_name) {

    // Shorten the first and last names to a single character and reduce the school name to a single word
    var first_name_char = get_first_character(first_name.toLowerCase());
    var last_name_char = get_first_character(last_name.toLowerCase());
    var school_name_word = get_first_word(school_name.toLowerCase());

    /* TODO
        Add check to database for duplicate usernames
        add a number to usernames that have already been taken
        a random number should be used to avoid inumeration
    */

    return `${first_name_char}${last_name_char}${school_name_word}`;
}

// Function to clean input and prevent XSS
function htmlEncode(str){
    return String(str).replace(/[^\w. ]/gi, function(c){
       return '&#'+c.charCodeAt(0)+';';
    });
}