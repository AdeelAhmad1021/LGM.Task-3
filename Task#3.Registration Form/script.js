var registrationForm = document.getElementById("registrationForm");
var displayData = document.getElementById("displayData");
var clearButton = document.getElementById("clearButton");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    displayFormData();
});

clearButton.addEventListener("click", function() {
    registrationForm.reset();
});

function displayFormData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    var image = document.getElementById("image").files[0];
    var gender = document.querySelector('input[name="gender"]:checked');
    var genderValue = gender ? gender.value : '';

    var skills = [];
    var skillCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    skillCheckboxes.forEach(function(skill) {
        skills.push(skill.value);
    });

    var person = document.createElement("div");
    person.classList.add("person");

    var personHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website}</p>
        <img src="${URL.createObjectURL(image)}" alt="Profile Image">
        <p><strong>Gender:</strong> ${genderValue}</p>
        <p class="skills"><strong>Skills:</strong>`;

    skills.forEach(function(skill) {
        personHTML += `<span>${skill}</span>`;
    });

    personHTML += `</p>`;
    person.innerHTML = personHTML;

    displayData.appendChild(person);
    registrationForm.reset();
}
