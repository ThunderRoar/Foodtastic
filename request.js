const api_url = 'https://api.spoonacular.com/recipes/complexSearch?&number=4&instructionsRequired=true&addRecipeInformation=true&apiKey=b99e03ec7a8d4dee98b8c1ae96b2afa7';

async function getRecipes(){
    const response = await fetch(api_url);
    const data = await response.json();
    let results = data.results;
    var recipes = [];
    var instructions = [];
    console.log(data);
 
   
    results.forEach((element) => {
       console.log(element.title);
       recipes.push(element.title);
   });

   results.forEach((element) => {
    console.log(element.analyzedInstructions[0].steps[0].step);
    instructions.push(element.analyzedInstructions[0].steps[0].step);
});
   
    for (let i = 0; i < instructions.length; i++) {
        console.log(results.analyzedInstructions[0].steps[i].step);
        instructions.push(results.analyzedInstructions[0].steps[i].step);
      }


    document.getElementById("1").innerHTML = recipes[0];
    document.getElementById("2").innerHTML = recipes[1];
    document.getElementById("3").innerHTML = recipes[2];
    document.getElementById("4").innerHTML = recipes[3];

    document.getElementById("5").innerHTML = instructions[0];
    document.getElementById("6").innerHTML = instructions[1];
    document.getElementById("7").innerHTML = instructions[2];
    document.getElementById("8").innerHTML = instructions[3];



    //document.getElementById("a").innerHTML = steps[0];
    // results.forEach((element) => {
    //     document.getElementById("Recipes").innerHTML = element;     // });
}



//function userPrompt(){
//}

//function displaySteps(){}
    //document.getElementById('title').textContent = title;


getRecipes();




