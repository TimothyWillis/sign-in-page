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

    // Error variables




    username_msg.style.opacity = 1;



    var username = generate_username(first_name, last_name, school_name);

    username_msg.innerHTML = `You new username is ${username}`;


}

function get_first_character(string) {
    return string.charAt(0);
}

function unhide_element(element) {

}

function jj() {

}

function generate_username(first_name, last_name, school_name) {

    var first_name_char = get_first_character(first_name.toLowerCase());
    var last_name_char = get_first_character(last_name.toLowerCase());
    //var school_name_word = 
    school_name = school_name.toLowerCase();


    return `${first_name_char}${last_name_char}${school_name}`;
}

// Function to clean input and prevent XSS
function htmlEncode(str){
    return String(str).replace(/[^\w. ]/gi, function(c){
       return '&#'+c.charCodeAt(0)+';';
    });
}

//function 