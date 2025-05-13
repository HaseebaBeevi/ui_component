let lists = document.getElementById("lists");
let searchBar = document.getElementById("searchBar");

function addCitiesToList() {
    let cities = [
        {
            name: "Uttar Pradesh",
            population: "235,687,000"
        },
        {
            name: "Bihar",
            population: "126,756,000"
        },
        {
            name: "Maharashtra",
            population: "126,385,000"
        },
        {
            name: "West Bengal",
            population: "102,000,000"
        },
        {
            name: "Madhya Pradesh",
            population: "85,000,000"
        },
        {
            name: "Tamil Nadu",
            population: "84,000,000"
        },
        {
            name: "Rajasthan",
            population: "80,000,000"
        },
        {
            name: "Andhra Pradesh",
            population: "54,000,000"
        },
        {
            name: "Odisha",
            population: "47,000,000"
        },
        {
            name: "Gujarat",
            population: "70,000,000"
        },
        {
            name: "Karnataka",
            population: "70,000,000"
        },
        {
            name: "Telangana",
            population: "38,000,000"
        },
        {
            name: "Kerala",
            population: "35,000,000"
        },
        {
            name: "Jharkhand",
            population: "40,000,000"
        },
        {
            name: "Assam",
            population: "36,000,000"
        },
        {
            name: "Punjab",
            population: "31,000,000"
        },
        {
            name: "Haryana",
            population: "29,000,000"
        },
        {
            name: "Chhattisgarh",
            population: "32,000,000"
        },
        {
            name: "Uttarakhand",
            population: "12,000,000"
        },
        {
            name: "Himachal Pradesh",
            population: "7,500,000"
        },
        {
            name: "Tripura",
            population: "4,200,000"
        },
        {
            name: "Meghalaya",
            population: "3,800,000"
        },
        {
            name: "Manipur",
            population: "3,400,000"
        },
        {
            name: "Nagaland",
            population: "2,100,000"
        },
        {
            name: "Goa",
            population: "1,500,000"
        },
        {
            name: "Arunachal Pradesh",
            population: "1,700,000"
        },
        {
            name: "Mizoram",
            population: "1,300,000"
        },
        {
            name: "Sikkim",
            population: "610,000"
        }
    ];



    cities.forEach(function (city) {
        let listItem = document.createElement("li");
        listItem.className = "flex justify-between border border-gray-100 p-2";

        let nameSpan = document.createElement("span");
        nameSpan.textContent = city.name;

        let populationSpan = document.createElement("span");
        populationSpan.textContent = city.population;

        listItem.appendChild(nameSpan);
        listItem.appendChild(populationSpan);
        lists.appendChild(listItem);
    });
}

function findThePlace(inputData) {
    let value = inputData.target.value.toLowerCase();
    let items = lists.querySelectorAll("li");

    for (let i = 0; i < items.length; i++) {
        let nameSpan = items[i].querySelector("span");
        let text = nameSpan.textContent;

        if (text.toLowerCase().includes(value)) {
            nameSpan.innerHTML = text.replace(new RegExp(`(${value})`, 'gi'), '<span class="bg-yellow-300">$1</span>');
            items[i].classList.remove("hidden");
            items[i].classList.add("flex");
        } else {
            items[i].classList.add("hidden");
            items[i].classList.remove("flex");
        }
    }
}
addCitiesToList();
searchBar.addEventListener("input", findThePlace);



