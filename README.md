# Foodtastic
## Inspiration

Most university students do not have enough experience and money to cook delicious and healthy food so we decided to make a website that provides them the luxury to make scrumptious time saving meals with the cheapest ingredients.

## What it does

The website makes the lives of post secondary students easier. It allows the user to choose from the list of recipes displayed on the homepage based on the user’s liking. They click the recipe and the magic begins.

The website displays a short description of the meal, shows approximate cook time, ingredients with their prices cheapest prices from different stores near their locality, easy-to-follow instructions to cook a delicious meal and lastly, and the nutritional value.

## How we built it

We first started off with the front-end of the website using HTML and styled it with CSS providing a modernistic look. The initial design was created in Wix and the logo was created using Adobe Express.

While the front-end was being worked on, we also simultaneously worked on pulling data from an API and writing the code for web scraping. The back-end development consisted of the API to gather data for the recipes. Data was taken from a web API from Spoonacular, which provides numerous healthy recipes and all the information that is needed (ie. Name of dish. Ingredients, Nutritional Facts, Instructions, etc.) Depending on what was needed, the API URL could be changed with keywords to modify the search results.

For the web scraping section, Puppeteer was used which is a headless browser and can be controlled entirely by code. A new page is created using an async function and passes the URL as a parameter. Then writing the code to use XPath to select required data from the website. By this, the website would be able to pull the ingredients data from different flyers on the web.

## Challenges we ran into

Integrating the web page scraping into the website with user input as it was challenging to use the relative XPath instead of the absolute XPath when the source link changed along with the item on the website.

Also, THE THUNDERSTORM CAUSED A POWER OUTAGE.

## Accomplishments that we're proud of

We are proud that we were able to get the website up and running with sample recipes using APIs with our frenzy to finish the interface. The website works well on its own even without the webpage scraping we wanted to integrate but it was a good chance to test our programming skills.

At the end of the day, we agree that it was one of the most fun hackathon experiences we’ve had despite not turning out the way we had imagined it to be.

## What we learned

Learning JavaScript while we coded a website that uses APIs. We explored new concepts like blockchains, APIs and web scraping. It was a fun experience.

## What's next for Foodtastic

**Recipe Promotion**

Add a system for users to rate and share, and add their own recipes. This will allow popular recipes to be more easily found, and experienced.

**Smarter Ingredient Shopping**

Allow users to indicate which items they already have and print out a shopping list. We can also integrate shopping delivery apps, such as Instacart.

**Better Recipe Searching**

Allow users to filter based on specific options such as dietary restrictions, food regions.

Expand the website with more recipes, gain sponsors and make it international.

