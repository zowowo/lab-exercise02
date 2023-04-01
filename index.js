function allLetter(inputtxt) {
    var letters = /^[a-z]*$/i;
    if (!inputtxt.value.match(letters)) {
        alert('Please input letters only');
    }
}

function submitForm() {

    if(document.getElementById("name").value == ""){
        alert('Please do not leave fields blank.');
    } 
    
    else {
        // let profile_picture = document.getElementById("file");
        let name = document.getElementById("name").value;
        let role = document.getElementById("role_slct").value;
        let course = document.getElementById("course_slct").value;
        window.location.href = "index2.html?name=" + name + 
                            "&course_slct=" + course + 
                            "&role_slct=" + role;

                        }
    }