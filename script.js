// Write your JavaScript code here!
window.addEventListener("load",function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
 
       let launchCheckListForm = document.getElementById("missionTarget");
       let index = Math.floor(Math.random() * json.length);     
       launchCheckListForm.innerHTML = `<h2>Mission Destination</h2>
       <ul>
       <li>Name: ${json[index].name}</li>
       <li>Diameter: ${json[index].diameter}</li>
       <li>Star: ${json[index].star}</li>
       <li>Distance from Earth: ${json[index].distance}</li>
       <li>Number of Moons: ${json[index].moons}</li>
       </ul>
       <img src="${json[index].image}">`;
      });
   });   
   
   let itemStatusReveal = document.getElementById("itemStatus");
   let launchStatusEval = document.getElementById("launchStatus");
   //itemStatusReveal.style.visibility = "hidden";
   let theForm = document.getElementById("launchForm");

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");


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
       } else if (isNaN(pilotNameCheck) === false || isNaN(copilotNameCheck) === false || isNaN(fuelLevelCheck) === true || isNaN(cargoMassCheck) === true){
         alert("Please enter valid information");         
       }        
         else{
             itemStatusReveal.style.visibility = "visible";
             pilotStatus.innerHTML = `Pilot Name: ${pilotName}`;
             copilotStatus.innerHTML = `Copilot Name: ${copilotName}`;
             fuelStatus.innerHTML = `Fuel Level: ${fuelLevel}`;
             cargoStatus.innerHTML = `Cargo Mass: ${cargoMass}`;
         }
         if (fuelLevel < 10000 && cargoMass > 10000){
            launchStatusEval.style.color= "red";
            launchStatusEval.innerHTML = `Shuttle not ready for launch!`;
            fuelStatus.innerHTML = `Fuel Level: ${fuelLevel} is to low for Launch!`;
            cargoStatus.innerHTML = `Cargo Mass: ${cargoMass} is to heavy for Launch!`;
         }else if (fuelLevel < 10000){
            launchStatusEval.style.color= "red";
            launchStatusEval.innerHTML = `Shuttle not ready for launch!`;
            fuelStatus.innerHTML = `Fuel Level: ${fuelLevel} is to low for Launch!`;
         }else if (cargoMass > 10000){
            launchStatusEval.style.color= "red";
            launchStatusEval.innerHTML = `Shuttle not ready for launch!`;
            cargoStatus.innerHTML = `Cargo Mass: ${cargoMass} is to heavy for Launch!`;
         }else {
            launchStatusEval.style.color= "green";
            launchStatusEval.innerHTML = `Shuttle is ready for launch!`;
            fuelStatus.innerHTML = `Fuel Level: ${fuelLevel} check has passed!`;
            cargoStatus.innerHTML = `Cargo Mass: ${cargoMass} check has passed!`;
         }           

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