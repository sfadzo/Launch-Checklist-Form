// Write your JavaScript code here!
window.addEventListener("load",function(){
   let theForm = document.getElementById("launchForm");


   theForm.addEventListener("submit", function(event){
      event.preventDefault();

       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let pilotName = pilotNameInput.value; 
       let pilotNameCheck = Number(pilotName); //should be NaN

       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let copilotName = copilotNameInput.value; 
       let copilotNameCheck = Number(copilotName); //should be NaN

       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let fuelLevel = fuelLevelInput.value;
       let fuelLevelCheck = Number(fuelLevel); //should not be NaN

       let cargoMassInput = document.querySelector("input[name=cargoMass]");
       let cargoMass = cargoMassInput.value;
       let cargoMassCheck = Number(cargoMass); //should not be NaN

       if (!pilotName || !copilotName || !fuelLevel || !cargoMass){
         alert("all fields must be completed");         
       }else if (isNaN(pilotNameCheck) === false || isNaN(copilotNameCheck) === false || isNaN(fuelLevelCheck) === true || isNaN(cargoMassCheck) === true)
         alert("Please enter valid information");
   });




});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/