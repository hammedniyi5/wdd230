var lastModified = document.lastModified;
let lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.innerHTML = lastModified;

function getCurrentValue() {
    const currentValue = localStorage.getItem("count");
    return currentValue ? parseInt(currentValue) : 0;
}

// Function to update and store the value in local storage
function updateAndStoreValue(value) {
    localStorage.setItem("count", value);
    // document.getElementById("currentValue").textContent = value;
}

const fruitsURL = "https://andejuli.github.io/wdd230/fruit.json";
const getFruits = async () => {
    const response = await fetch(fruitsURL);
    const data = await response.json();
    console.log(data);

    data.forEach(element => {
        var newoption = document.createElement("option");
        newoption.value = String(element.name);
        newoption.textContent = String(element.name);

        var select = document.getElementById('fruits');
        select.appendChild(newoption);
    });
}

getFruits();

var select = document.getElementById("fruits");
var output = document.getElementById("output");

    select.addEventListener("change", () => {
        var selectedOptions = select;
            selectedOptions.forEach(element => {
                let fruit = document.createElement("h3");
                fruit.innerHTML = String(element);
                output.appendChild(fruit);
            });
        console.log(selectedOptions);
    });


    
    document.getElementById("orderForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const formData = new FormData(this); // Get the form data

        // Convert the form data into an object
        const formDataObject = {};
        formData.forEach((value, key) => {
            if (formDataObject[key] === undefined) {
                formDataObject[key] = value;
            } else {
                if (!Array.isArray(formDataObject[key])) {
                    formDataObject[key] = [formDataObject[key]];
                }
                formDataObject[key].push(value);
            }
        });
        console.log(formData)
        

        const currentValue = getCurrentValue();
        console.log(currentValue)
            const newValue = currentValue + 1;
            updateAndStoreValue(newValue);

        // Add a click event listener to the increment button
        // document.getElementById("incrementButton").addEventListener("click", function () {
        //     const currentValue = getCurrentValue();
        //     const newValue = currentValue + 1;
        //     updateAndStoreValue(newValue);
        // });

        // Store the form data in local storage
        localStorage.setItem("orderData", JSON.stringify(formDataObject));

        // Redirect to the process_form.html page
        window.location.href = "confirm.html";
    });
