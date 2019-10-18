var itemType, itemName, itemDesc, itemPrice;
var order = [];
var itemsDisplay = [];
var counter = 1;

var lastItemCategory = "coffee";

var coffeeItems = ["americano", "cold-brew", "frappuccino", "latte", "mocha", "macchiato", "flat-white", "espresso", "cappuccino", "breve"];
var coffeeItemsDesc = [];
var coffeeNames = ["Americano", "Cold Brew", "Frappuccino", "Latte", "Mocha", "Macchiato", "Flat-White", "Espresso", "Cappuccino", "Breve"];

var teaItems = ["green-tea", "black-tea", "oolong-tea", "white-tea", "pu-erh-tea", "earl-grey-tea", "peppermint-tea", "black-currant-tea", "chamomile-tea", "chai-tea"];
var teaItemsDesc = [];
var teaNames = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea", "Pu'erh Tea", "Earl Grey Tea", "Peppermint Tea", "Black Currant Tea", "Chamomile Tea", "Chai Tea"];

var pastryItems = ["cookie", "scone", "tart", "croissant", "bundt-cake", "cupcake", "macaron", "eclair", "biscotti", "pie"];
var pastryItemsDesc = [];
var pastryNames = ["Cookie", "Scone", "Tart", "Croissant", "Bundt Cake", "Cupcake", "Macaron", "Eclair", "Biscotti", "Pie"];

var merchandiseItems = ["tea-cup", "coffee-mug", "coffee-beans", "tea-leaves", "coaster", "clock", "t-shirt", "framed-picture", "apron", "coozie"];
var merchandiseNames = ["Tea Cup", "Coffee Mug", "Coffee Beans", "Tea Leaves", "Coaster", "Clock", "T-Shirt", "Framed Picture", "Apron", "Coozie"];

var coffeePrice = 3.50;
var teaPrice = 2.50;
var pastryPrice = 2.00;
var merchandisePrice = 12.50;

var itemList = [];

function orderItem(title, description, price, imageURL, itemCategory) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageURL = imageURL;
    this.itemCategory = itemCategory;
}

function createObjects() {
    clearOrder();
    for (var i = 0; i < 10; i++) {

        var coffeeImagePath = "assets/img/" + coffeeItems[i] + ".jpg";
        var teaImagePath = "assets/img/" + teaItems[i] + ".jpg";
        var pastryImagePath = "assets/img/" + pastryItems[i] + ".jpg";
        var merchandiseImagePath = "assets/img/" + merchandiseItems[i] + ".jpg";

        //console.log(coffeeImagePath);

        var coffeeDesc = JSON.stringify(document.getElementById("coffeeDesc" + i));
        var coffeeTitle = coffeeNames[i];

        var teaDesc = JSON.stringify(document.getElementById("teaDesc" + i));
        var teaTitle = teaNames[i];

        var pastryDesc = JSON.stringify(document.getElementById("pastryDesc" + i));
        var pastryTitle = pastryNames[i];

        
        var merchandiseDesc = JSON.stringify(document.getElementById("merchandiseDesc" + i));
        var merchandiseTitle = merchandiseNames[i];
        

        //console.log(coffeeDesc.innerHTML);

        var coffeeHolder = new orderItem(coffeeTitle, coffeeDesc, coffeePrice, coffeeImagePath, "coffee");
        var teaHolder = new orderItem(teaTitle, teaDesc, teaPrice, teaImagePath, "tea");
        var pastryHolder = new orderItem(pastryTitle, pastryDesc, pastryPrice, pastryImagePath, "pastry");
        var merchandiseHolder = new orderItem(merchandiseTitle, merchandiseDesc, merchandisePrice, merchandiseImagePath, "merchandise");

        console.log("Title: " + coffeeHolder.itemCategory);
        console.log("Title: " + teaHolder.itemCategory);
        console.log("Title: " + pastryHolder.itemCategory);
        console.log("Title: " + merchandiseHolder.itemCategory);
        //console.log(coffeeDesc);
        //console.log(coffeePrice);
        //console.log(coffeeImagePath);

        itemsDisplay.push(coffeeHolder);
        itemsDisplay.push(teaHolder);
        itemsDisplay.push(pastryHolder);
        itemsDisplay.push(merchandiseHolder);
    }
}

function getItemSelected() {
    var itemSelected = document.getElementById("itemDropdownSelect").value;
    console.log(itemSelected);
}

function changeMenuItems() {
    /*
    var itemSelected = document.getElementById("itemDropdownSelect").value;
    if (itemSelected == "coffee") {
        alert("You are definitely going to enjoy the coffee!");
    }
    else if (itemSelected == "tea") {
        alert("You are definitely going to enjoy the tea!");
    }
    else if (itemSelected == "pastry") {
        alert("You are definitely going to enjoy the pastries!");
    }
    */

    var item = document.getElementById("itemDropdownSelect").value;

    /*
     * Coffee Items
     */
    if (item == "coffee") { // item selected from ddl

        for (var i = 0; i < coffeeItems.length; i++) {
            var image = createImage(coffeeItems[i], "300px", "300px");
            var div = document.getElementById("imageDisplay" + i);
            div.innerHTML = "";         // clear the contents of the div
            //console.log(image);
            div.appendChild(image);     // add the image to the div
            /*
            document.getElementById(coffeeItems[i]).setAttribute("id", "bob");
            console.log("Current Item ID: " + document.getElementById("bob").id);
            */

            if (lastItemCategory == "tea") {
                var itemDescChangeDestination = "coffeeDesc" + i;
                var itemDescChangeSource = "teaDesc" + i;
                /*
                console.log(document.getElementById(itemDescChangeDestination).id);
                console.log(document.getElementById(itemDescChangeSource).id);
                */
                var nextItem = coffeeItems[i]; //queue next coffee item from array
                document.getElementById(teaItems[i]).setAttribute("id", nextItem); //change tea to coffee
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = coffeeNames[i];
                //console.log("Current Item ID: " + document.getElementById(coffeeItems[i]).id); //display coffee item

                var teas = document.getElementsByClassName("teaDesc");
                var coffees = document.getElementsByClassName("coffeeDesc");

                var teasPrice = document.getElementsByClassName("teaPrice");
                var coffeesPrice = document.getElementsByClassName("coffeePrice");

                for (var j = 0; j < coffees.length; j++) {
                    teas[j].style.display = 'none'
                    coffees[j].style.display = 'block'

                    teasPrice[j].style.display = 'none';
                    coffeesPrice[j].style.display = 'block';
                }
            }
            else if (lastItemCategory == "pastry") {
                var itemDescChangeDestination = "coffeeDesc" + i;
                var itemDescChangeSource = "pastryDesc" + i;
                var nextItem = coffeeItems[i]; //queue next coffee item from array
                /*
                console.log(nextItem);
                console.log(document.getElementById(pastryItems[i]));
                */
                document.getElementById(pastryItems[i]).setAttribute("id", nextItem); //change pastry to coffee
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = coffeeNames[i];
                //console.log("Current Item ID: " + document.getElementById(coffeeItems[i]).id); //display coffee

                var pastries = document.getElementsByClassName("pastryDesc");
                var coffees = document.getElementsByClassName("coffeeDesc");

                var pastriesPrice = document.getElementsByClassName("pastryPrice");
                var coffeesPrice = document.getElementsByClassName("coffeePrice");

                for (var j = 0; j < coffees.length; j++) {
                    pastries[j].style.display = 'none'
                    coffees[j].style.display = 'block'

                    coffeesPrice[j].style.display = 'block';
                    pastriesPrice[j].style.display = 'none';
                }
            }
            else if (lastItemCategory == "merchandise") {
                var nextItem = coffeeItems[i]; //queue next coffee item from array
                /*
                console.log(nextItem);
                console.log(document.getElementById(pastryItems[i]));
                */
                document.getElementById(merchandiseItems[i]).setAttribute("id", nextItem); //change pastry to coffee
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = coffeeNames[i];
                //console.log("Current Item ID: " + document.getElementById(coffeeItems[i]).id); //display coffee

                var merchandises = document.getElementsByClassName("merchandiseDesc");
                var coffees = document.getElementsByClassName("coffeeDesc");

                var merchandisesPrice = document.getElementsByClassName("merchandisePrice");
                var coffeesPrice = document.getElementsByClassName("coffeePrice");

                for (var j = 0; j < coffees.length; j++) {
                    merchandises[j].style.display = 'none'
                    coffees[j].style.display = 'block'

                    coffeesPrice[j].style.display = 'block';
                    merchandisesPrice[j].style.display = 'none';
                }
            }
        }
        lastItemCategory = "coffee"; //set coffee as last selected category
    }

    /*
     * Tea Items
     */
    else if (item == "tea") { // item selected from ddl

        for (var i = 0; i < teaItems.length; i++) {
            var image = createImage(teaItems[i], "300px", "300px");
            var div = document.getElementById("imageDisplay" + i);
            div.innerHTML = "";         // clear the contents of the div
            //console.log(image);
            div.appendChild(image);     // add the image to the div

            if (lastItemCategory == "coffee") {
                var itemDescChangeDestination = "teaDesc" + i;
                var itemDescChangeSource = "coffeeDesc" + i;
                var nextItem = teaItems[i];
                /*
                console.log(nextItem);
                console.log("Before ID change: " + document.getElementById(coffeeItems[i]).id);
                console.log(document.getElementById(coffeeItems[i]));
                */
                document.getElementById(coffeeItems[i]).setAttribute("id", nextItem);
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = teaNames[i];
                //console.log("Current Item ID: " + document.getElementById(teaItems[i]).id);

                var teas = document.getElementsByClassName("teaDesc");
                var coffees = document.getElementsByClassName("coffeeDesc");

                var teasPrice = document.getElementsByClassName("teaPrice");
                var coffeesPrice = document.getElementsByClassName("coffeePrice");

                for (var j = 0; j < teas.length; j++) {
                    coffees[j].style.display = 'none'
                    teas[j].style.display = 'block'
                    coffeesPrice[j].style.display = 'none';
                    teasPrice[j].style.display = 'block';
                }

                /*
                document.getElementById(itemDescChangeDestination.id).style.display = "normal";
                document.getElementById(itemDescChangeSource.id).style.display = "none";
                */

            }
            else if (lastItemCategory == "pastry") {
                var itemDescChangeDestination = "teaDesc" + i;
                var itemDescChangeSource = "pastryDesc" + i;
                var nextItem = teaItems[i]; //queue next tea item from array
                /*
                console.log(nextItem);
                console.log("Before ID change: " + document.getElementById(pastryItems[i]).id);
                console.log(document.getElementById(pastryItems[i]));
                */
                document.getElementById(pastryItems[i]).setAttribute("id", nextItem); //change pastry to tea
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = teaNames[i];
                //console.log("Current Item ID: " + document.getElementById(teaItems[i]).id); //display tea

                var teas = document.getElementsByClassName("teaDesc");
                var pastries = document.getElementsByClassName("pastryDesc");

                var teasPrice = document.getElementsByClassName("teaPrice");
                var pastriesPrice = document.getElementsByClassName("pastryPrice");

                for (var j = 0; j < teas.length; j++) {
                    pastries[j].style.display = 'none';
                    teas[j].style.display = 'block';

                    pastriesPrice[j].style.display = 'none';
                    teasPrice[j].style.display = 'block';
                }

                /*
                document.getElementById(itemDescChangeDestination.id).style.display = "normal";
                document.getElementById(itemDescChangeSource.id).style.display = "none";
                */

            }
            else if (lastItemCategory == "merchandise") {
                var nextItem = teaItems[i]; //queue next coffee item from array
                /*
                console.log(nextItem);
                console.log(document.getElementById(pastryItems[i]));
                */
                document.getElementById(merchandiseItems[i]).setAttribute("id", nextItem); //change pastry to coffee
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = teaNames[i];
                //console.log("Current Item ID: " + document.getElementById(coffeeItems[i]).id); //display coffee

                var merchandises = document.getElementsByClassName("merchandiseDesc");
                var teas = document.getElementsByClassName("teaDesc");

                var merchandisesPrice = document.getElementsByClassName("merchandisePrice");
                var teasPrice = document.getElementsByClassName("teaPrice");

                for (var j = 0; j < teas.length; j++) {
                    merchandises[j].style.display = 'none'
                    teas[j].style.display = 'block'

                    teasPrice[j].style.display = 'block';
                    merchandisesPrice[j].style.display = 'none';
                }
            }
        }
        lastItemCategory = "tea";
    }

    /*
     * Pastry Items
     */
    else if (item == "pastry") { // item selected from ddl

        for (var i = 0; i < pastryItems.length; i++) {
            var image = createImage(pastryItems[i], "300px", "300px");
            var div = document.getElementById("imageDisplay" + i);
            div.innerHTML = "";         // clear the contents of the div
            //console.log(image);
            div.appendChild(image);     // add the image to the div
            console.log(i);

            if (lastItemCategory == "coffee") {
                var nextItem = pastryItems[i]; //queue next pastry item from array
                /*
                console.log(nextItem);
                console.log("Before ID change: " + document.getElementById(coffeeItems[i]).id);
                console.log(document.getElementById(coffeeItems[i]));
                */
                document.getElementById(coffeeItems[i]).setAttribute("id", nextItem); //change coffee to pastry
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = pastryNames[i];
                //console.log("Current Item ID: " + document.getElementById(pastryItems[i]).id); //display pastry

                var pastries = document.getElementsByClassName("pastryDesc");
                var coffees = document.getElementsByClassName("coffeeDesc");

                var coffeesPrice = document.getElementsByClassName("coffeePrice");
                var pastriesPrice = document.getElementsByClassName("pastryPrice");

                for (var j = 0; j < pastries.length; j++) {
                    coffees[j].style.display = 'none';
                    pastries[j].style.display = 'block';

                    coffeesPrice[j].style.display = 'none';
                    pastriesPrice[j].style.display = 'block';
                }

            }
            else if (lastItemCategory == "tea") {
                var nextItem = pastryItems[i]; //queue next pastry item from array
                /*
                console.log(nextItem);
                console.log("Before ID change: " + document.getElementById(teaItems[i]).id);
                console.log(document.getElementById(teaItems[i]));
                */
                document.getElementById(teaItems[i]).setAttribute("id", nextItem); //change coffee to pastry
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = pastryNames[i];
                //console.log("Current Item ID: " + document.getElementById(pastryItems[i]).id); //display pastry

                var teas = document.getElementsByClassName("teaDesc");
                var pastries = document.getElementsByClassName("pastryDesc");

                var teasPrice = document.getElementsByClassName("teaPrice");
                var pastriesPrice = document.getElementsByClassName("pastryPrice");

                for (var j = 0; j < teas.length; j++) {
                    console.log(j);
                    teas[j].style.display = 'none';
                    pastries[j].style.display = 'block';

                    teasPrice[j].style.display = 'none';
                    pastriesPrice[j].style.display = 'block';
                }

            }
            else if (lastItemCategory == "merchandise") {
                var nextItem = pastryItems[i]; //queue next pastry item from array
                /*
                console.log(nextItem);
                console.log("Before ID change: " + document.getElementById(teaItems[i]).id);
                console.log(document.getElementById(teaItems[i]));
                */
                document.getElementById(merchandiseItems[i]).setAttribute("id", nextItem); //change coffee to pastry
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = pastryNames[i];
                //console.log("Current Item ID: " + document.getElementById(pastryItems[i]).id); //display pastry

                var merchandises = document.getElementsByClassName("merchandiseDesc");
                var pastries = document.getElementsByClassName("pastryDesc");

                var merchandisesPrice = document.getElementsByClassName("merchandisePrice");
                var pastriesPrice = document.getElementsByClassName("pastryPrice");

                for (var j = 0; j < pastries.length; j++) {
                    merchandises[j].style.display = 'none';
                    pastries[j].style.display = 'block';

                    merchandisesPrice[j].style.display = 'none';
                    pastriesPrice[j].style.display = 'block';
                }
            }
        }
        lastItemCategory = "pastry";
    }
    /*
     * Pastry Items
     */
    else if (item == "merchandise") { // item selected from ddl

        for (var i = 0; i < merchandiseItems.length; i++) {
            var image = createImage(merchandiseItems[i], "300px", "300px");
            var div = document.getElementById("imageDisplay" + i);
            div.innerHTML = "";         // clear the contents of the div
            //console.log(image);
            div.appendChild(image);     // add the image to the div
            console.log(i);

            if (lastItemCategory == "coffee") {
                var nextItem = merchandiseItems[i]; //queue next pastry item from array
                /*
                console.log(nextItem);
                console.log("Before ID change: " + document.getElementById(coffeeItems[i]).id);
                console.log(document.getElementById(coffeeItems[i]));
                */
                document.getElementById(coffeeItems[i]).setAttribute("id", nextItem); //change coffee to pastry
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = merchandiseNames[i];
                //console.log("Current Item ID: " + document.getElementById(pastryItems[i]).id); //display pastry

                var merchandises = document.getElementsByClassName("merchandiseDesc");
                var coffees = document.getElementsByClassName("coffeeDesc");

                var coffeesPrice = document.getElementsByClassName("coffeePrice");
                var merchandisesPrice = document.getElementsByClassName("merchandisePrice");

                for (var j = 0; j < merchandises.length; j++) {
                    coffees[j].style.display = 'none';
                    merchandises[j].style.display = 'block';

                    coffeesPrice[j].style.display = 'none';
                    merchandisesPrice[j].style.display = 'block';
                }

            }
            else if (lastItemCategory == "tea") {
                var nextItem = merchandiseItems[i]; //queue next pastry item from array
                /*
                console.log(nextItem);
                console.log("Before ID change: " + document.getElementById(teaItems[i]).id);
                console.log(document.getElementById(teaItems[i]));
                */
                document.getElementById(teaItems[i]).setAttribute("id", nextItem); //change coffee to pastry
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = merchandiseNames[i];
                //console.log("Current Item ID: " + document.getElementById(pastryItems[i]).id); //display pastry

                var teas = document.getElementsByClassName("teaDesc");
                var merchandises = document.getElementsByClassName("merchandiseDesc");

                var teasPrice = document.getElementsByClassName("teaPrice");
                var merchandisesPrice = document.getElementsByClassName("merchandisePrice");

                for (var j = 0; j < teas.length; j++) {
                    teas[j].style.display = 'none';
                    merchandises[j].style.display = 'block';

                    teasPrice[j].style.display = 'none';
                    merchandisesPrice[j].style.display = 'block';
                }

            }
            else if (lastItemCategory == "pastry") {
                var nextItem = merchandiseItems[i]; //queue next pastry item from array
                /*
                console.log(nextItem);
                console.log("Before ID change: " + document.getElementById(teaItems[i]).id);
                console.log(document.getElementById(teaItems[i]));
                */
                document.getElementById(pastryItems[i]).setAttribute("id", nextItem); //change coffee to pastry
                var itemNameChange = "itemName" + i;
                document.getElementById(itemNameChange).innerHTML = merchandiseNames[i];
                //console.log("Current Item ID: " + document.getElementById(pastryItems[i]).id); //display pastry

                var merchandises = document.getElementsByClassName("merchandiseDesc");
                var pastries = document.getElementsByClassName("pastryDesc");

                var merchandisesPrice = document.getElementsByClassName("merchandisePrice");
                var pastriesPrice = document.getElementsByClassName("pastryPrice");

                for (var j = 0; j < merchandises.length; j++) {
                    merchandises[j].style.display = 'block';
                    pastries[j].style.display = 'none';

                    merchandisesPrice[j].style.display = 'block';
                    pastriesPrice[j].style.display = 'none';
                }
            }
        }
        lastItemCategory = "merchandise";
    }
}

function createImage(name, width, height) {
    var imageFile = "/assets/img/" + name + ".jpg";
    //console.log(imageFile);

    var image = document.createElement("img");

    if (image != null && image != undefined) {
        image.src = imageFile;
        image.style.width = width;
        image.style.height = height;
    }

    return image;
}

function addItem(ID) {
    var currentItemSelected = document.getElementById("itemDropdownSelect").value;
    var text = document.getElementById(name);
    for (var i = 0; i < 10; i++) {
        if (currentItemSelected == "coffee") {
            if (i == ID) {
                text = coffeeNames[i];
            }
        }
        else if (currentItemSelected == "tea") {
            var teaID = "itemName" + i;
            if (i == ID) {
                text = teaNames[i];
            }
        }
        else if (currentItemSelected == "pastry") {
            var pastryID = "itemName" + i;
            if (i == ID) {
                text = pastryNames[i];
            }
        }
        else if (currentItemSelected == "merchandise") {
            var merchandiseID = "itemName" + i;
            if (i == ID) {
                text = merchandiseNames[i];
            }
        }
    }
    var ulNode = document.getElementById("orderList");

    var liNode = document.createElement("li");
    var textNode = document.createTextNode(text);

    liNode.appendChild(textNode);

    ulNode.appendChild(liNode);
}

function clearOrder() {
    order = [];
    var myOrder = document.getElementById("orderList");
    myOrder.innerHTML = "";
    //alert("Your order has been cleared!");
}

function placeOrder() {
    var myOrder = document.getElementById("orderList");
    if (myOrder.hasChildNodes()) {
        alert("Order Confirmed! \n You are Order # " + counter);
        counter++;
        clearOrder();
    }
    else {
        alert("You need to add items first before you can place your order!");
    }
}