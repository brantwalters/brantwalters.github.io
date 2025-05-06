const submitForm = () => {
    alert("Application submitted");
    
    const application = document.getElementById("application");
    application.innerHTML = '<h1 id="submitted">Submitted!</h1>';
}

const resetForm = () => alert("Form cleared");

const checkAmbidextrous = () => {
    const check1 = document.getElementById("check1");
    const check2 = document.getElementById("check2");

    const span = document.getElementById("ambidextrous");

    if (check1.checked && check2.checked) {
        span.innerHTML = "<p>Are are ambidextrous?</p>";
    }
    else {
        span.innerHTML = "";
    }
}

