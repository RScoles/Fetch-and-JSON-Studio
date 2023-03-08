// TODO: add code here
window.addEventListener ('load', function() {

    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(function(response) {
        return response.json();
    }).then(function(response) {

        let sortedAstronaunts = response.sort(function (a, b) {return a.hoursInSpace - b.hoursInSpace });
        let myContainer = document.getElementById('container');

       let allMyHtml = "";

       let myCount = `
       <h3>Astronaunts Count: ${sortedAstronaunts.length}</h3>
       `
       allMyHtml += myCount;
       sortedAstronaunts.forEach(function(astronaunt) {
            let myHtml = `
<div class="astronaut">
    <div class="bio">
        <h3>${astronaunt.firstName} ${astronaunt.lastName}</h3>
        <ul>
            <li>Hours in Space:${astronaunt.hoursInSpace}</li>
            <li ${astronaunt.active ? 'style="color:green;"' : ''}>Active: ${astronaunt.active}</li>
            <li>Skills: ${astronaunt.skills.join(", ")}</li>
        </ul>
    </div>
    <img class="avatar" src="${astronaunt.picture}">
</div>
            `;
           allMyHtml += myHtml;
        
        });

    myContainer.innerHTML = allMyHtml;
    });

});