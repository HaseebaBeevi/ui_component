let lists = document.getElementById("lists");
let searchBar = document.getElementById("searchBar");

function addCitiesToList() {
    let cities = [
        {
            name: "Uttar Pradesh, India",
            population: "240,000,000"
        },
        {
            name: "Bihar, India",
            population: "131,000,000"
        },
        {
            name: "Maharashtra, India",
            population: "125,000,000"
        },
        {
            name: "West Bengal, India",
            population: "101,000,000"
        },
        {
            name: "Karnataka, India",
            population: "61,095,297"
        },
        {
            name: "Gujarat, India",
            population: "60,439,692"
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



