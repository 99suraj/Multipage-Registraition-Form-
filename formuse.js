

function myfunc(event) {
    event.preventDefault();

    var first_name = document.getElementById('first-name').value;
    var last_name = document.getElementById('last-name').value;

    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;

    var temp_gender = document.getElementById('gender').value;
    // var temp_gender = document.getElementById('sectionidb').value;

    var father_first_name = document.getElementById('father-first-name').value;
    var father_last_name = document.getElementById('father-last-name').value;

    var mother_first_name = document.getElementById('mother-first-name').value;
    var mother_last_name = document.getElementById('mother-last-name').value;



    var nationality = document.getElementById('nationality').value;

    var home_address = document.getElementById('home-address').value;

    var city = document.getElementById('city').value;

    var country = document.getElementById('country').value;

    var telephone_number = document.getElementById('telephone-number').value;
    var telephone_home = document.getElementById('telephone-home').value;


    localStorage.setItem('first_name', first_name);
    localStorage.setItem('last_name', last_name);

    localStorage.setItem('dob', dob);
    localStorage.setItem('email', email);

    localStorage.setItem('father_first_name', father_first_name);
    localStorage.setItem('father_last_name', father_last_name);

    localStorage.setItem('mother_first_name', mother_first_name);
    localStorage.setItem('mother_last_name', mother_last_name);

    localStorage.setItem('temp_gender', temp_gender);

    localStorage.setItem('nationality', nationality);
    localStorage.setItem('home_address', home_address);
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
    localStorage.setItem('telephone_number', telephone_number);
    localStorage.setItem('telephone_home', telephone_home);


    // telephone number validation

    var a = document.getElementById('telephone-number').value;

    if (a == "") {
        document.getElementById('message').innerHTML = "please enter telephone number";


        return false;
    }
    if (a.length < 10) {
        document.getElementById('message').innerHTML = "please enter only 10 numbers";

        return false;
    }
    if (a.length > 10) {
        document.getElementById('message').innerHTML = "pleaes enter only 10 numbers";

        return false;
    }
    document.getElementById('message').innerHTML = "";

    // validate telephone home 
    var b = document.getElementById('telephone-home').value;

    if (b == "") {
        document.getElementById('message2').innerHTML = "please enter telephone number";


        return false;
    }
    if (b.length < 10) {
        document.getElementById('message2').innerHTML = "please enter only 10 numbers";

        return false;
    }
    if (b.length > 10) {
        document.getElementById('message2').innerHTML = "pleaes enter only 10 numbers";

        return false;
    }
    document.getElementById('message2').innerHTML = "";


    // for move on next form and validate this form
    document.getElementById('submit').addEventListener("click", working);
    function working() {
        // name 
        var first_name = document.getElementById('first-name').value;
        var last_name = document.getElementById('last-name').value;
        //  dob
        var dob = document.getElementById('dob').value;

        //  email
        var email = document.getElementById('email').value;

        // father name
        var father_first_name = document.getElementById('father-first-name').value;
        var father_last_name = document.getElementById('father-last-name').value;
        // mother name 
        var mother_first_name = document.getElementById('mother-first-name').value;
        var mother_last_name = document.getElementById('mother-last-name').value;
        // gender
        var gender = document.getElementById('last-name').value;
        // nationality
        var nationality = document.getElementById('last-name').value;
        // home 
        var home = document.getElementById('last-name').value;

        // city 
        var city = document.getElementById('last-name').value;
        // country
        var country = document.getElementById('last-name').value;
        //telephone_number
        var telephone_number = document.getElementById('last-name').value;
        // telephone home
        var telephone_home = document.getElementById('last-name').value;


        if (first_name != "" && last_name != "" && dob != "" && email != "" && father_first_name != "" && father_last_name != ""
            && mother_first_name != "" && mother_last_name != "" && gender != "" && nationality != "" && home != "" && city != "" && country != "" && telephone_number != ""
            && telephone_home != "") {
            window.location.assign("form2.html");
            //  alert("your form is successfully filled up.");
        }
    }
}


        // document.write("suceess");