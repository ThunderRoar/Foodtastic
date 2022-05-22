const api_url = 'https://api.spoonacular.com/recipes/complexSearch?&number=4&instructionsRequired=true&addRecipeInformation=true&apiKey=b99e03ec7a8d4dee98b8c1ae96b2afa7';

async function getRecipes(){
    const response = await fetch(api_url);
    const data = await response.json();
    let results = data.results;
    console.log(data);
 
   
//     results.forEach((element) => {
//        console.log(element.title);
//        recipes.push(element.title);
//    });
    console.log(data.results.title);
   document.getElementById("title").innerHTML = data.results.title;




}

getRecipes();