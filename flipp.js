const url = 'https://backflipp.wishabi.com/flipp/items/search?locale=en-ca&postal_code=H4A1B9&q=cereal';
// const item = 'cereal';
// const fullURL = url+item;

async function getGroceries(){
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

getGroceries();