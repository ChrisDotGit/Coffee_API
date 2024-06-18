var api2 = '';

function onPageStartup() {
    console.log("======PAGE STARTUP=======");

    // Call function to display output
    fetchCoffeeAPI().then(
        output => 
            {getItems(output);
             displayOutput(output[0]);
            }
        )
}

function fetchCoffeeAPI() {
    var fetchData = fetch("https://api.sampleapis.com/coffee/" + api2)
    return fetchData.then(response =>response.json());

}

function displayOutput(item){
    document.getElementById("Description").innerHTML = item.description;
    document.getElementById("Ingredients").innerHTML = item.ingredients;
    document.getElementById("image").src = item.image;
}

function dropdownSelect(selected){
    var selected = selected.value
    fetchCoffeeAPI().then(
        (output) => 
        {displayOutput(output[selected]);
        }
        )
}

function getItems(output){
    var ddown = document.getElementById("dropdown");
    for (var i=0; i<output.length; i++) {
        var option = document.createElement("option");
        // console.log("GET COFFEE TITLE LOOP", output[i].title);
        
        option.text = output[i].title;
        option.value =  i;
        ddown.add(option);
    }
    

}


function coffeeType(choice){
    var selectedType = choice.value;
    console.log(selectedType)
    api2 = selectedType;
    
    fetchCoffeeAPI().then(
        output => 
            {getItems(output);
             displayOutput(output[0]);
            }
        )

}