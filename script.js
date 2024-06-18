var coffee_type = 'iced';

// ON PAGE STARTUP
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

// FETCH API
function fetchCoffeeAPI() {
    var fetchData = fetch("https://api.sampleapis.com/coffee/" + coffee_type)
    return fetchData.then(response =>response.json());

}


// DROPDOWN COFFEE SELECT EVENT
function dropdownSelect(selected){
    var selected = selected.value
    fetchCoffeeAPI().then(
        (output) => 
        {displayOutput(output[selected]);
        }
        )
}


// DROPDOWN COFFEE TYPE EVENT
function coffeeType(choice){
    var selectedType = choice.value;
    console.log(selectedType)
    coffee_type = selectedType;
    
    fetchCoffeeAPI().then(
        output => 
            {getItems(output);
             displayOutput(output[0]);
            }
        )
}

// POPULATE DROPDOWN OPTION
function getItems(output){
    // remove all options before adding the new options
    deleteOptions();
    var ddown = document.getElementById("dropdown");
    for (var i=0; i<output.length; i++) {
        var option = document.createElement("option");
        // console.log("GET COFFEE TITLE LOOP", output[i].title);
        
        option.text = output[i].title;
        option.value =  i;
        ddown.add(option);
    }
}

function deleteOptions() {
    const dropdown = document.getElementById('dropdown');

    // Remove all options 
    while (dropdown.options.length > 0) {
        dropdown.remove(0);
    }
}



// DISPLAY OUTPUT TO SCREEN
function displayOutput(item){
    document.getElementById("Description").innerHTML = item.description;
    document.getElementById("Ingredients").innerHTML = item.ingredients;
    document.getElementById("image").src = item.image;
}