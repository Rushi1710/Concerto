var foodItem1 = [
    {
      id: 1,
      name: "Ambur Biryani",
      category: "biryani",
      rating: 4.3,
      price: 13,
      img: "biryani.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Hyderabadi Biryani",
      category: "biryani",
      rating: 4.3,
      price: 15,
      img: "biryani.jpg",
      quantity: 1,
    },
    {
      id: 3,
      name: "Egg Biryani",
      category: "biryani",
      rating: 4.3,
      price: 18,
      img: "biryani.jpg",
      quantity: 1,
    },
    {
        id: 27,
        name: "Veg Kolhapur",
        category: "vegetable",
        rating: 4.3,
        price: 10,
        img: "images/vegetable/vegetable-kolhapuri.jpg",
        quantity: 1,
      },
      {
        id: 28,
        name: "Veg Masala",
        category: "vegetable",
        rating: 4.3,
        price: 4,
        img: "images/vegetable/vegetable-masala.jpg",
        quantity: 1,
      },
      {
        id: 29,
        name: "Veg Pakora",
        category: "vegetable",
        rating: 4.3,
        price: 4,
        img: "images/vegetable/vegetable-pakora.jpg",
        quantity: 1,
      },]

for(var i = 0; i<foodItem1.length;i++)
{
    // console.log(foodItem[i]);
    var b = Object.keys(foodItem1[i])
    for(var n of b)
    {
        console.log(n,foodItem1[i][n]);
        
    }
}
function displayItem(items){ 
        var dis = foodItem1.filter(item=>item.category=='vegetable')
        for(let item of dis)
        {
            console.log(item.img)
            document.getElementById('items').innerText = item.img;
        }

}


displayItem('vegetable');





















//       /**
//  * This function is passed the list of items of any categpry based on users choice.
//  * It then iterates over the list and creates the HTML i.e rows for every item.
//  * It then returns the generated html to displayItems() function
//  */
// function displayItem(items)
// {
    
// }
// /**
//  * this function is called when a particular item is selected from 
//  * dropdown. based on the category it fetches all the items and invokes
//  * displayItem function passing the list of items for that category.
//  * The returned HTML from displayItem() is then displayed on the main page
//  */
// function displayItems() {
  
// }
// // call this function to display the 1st item in the fropdown
// displayItems();

// // create an empty array to store the item user selects to be added in the cart.
// var cartData = [];
// /**
//  This function is called when the user ticks the checkbox and it does the following:
//  1. Gets the id of the item checked as parameter and looks up for the item in the foodItem array
//  2. Then checks if item is not present in the cart then add the item in the cart.
//  3. If the item is already present in the cart then display an alert saying, item already present in the cart.
//  */
// function addToCart(itemid) {
   
// }
//       function display(){

//       }