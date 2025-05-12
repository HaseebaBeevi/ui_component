let searchBar = document.getElementById("searchBar");


searchBar.addEventListener("input", function (inputData) {
    let value = inputData.target.value.toLowerCase()


    let lists = document.getElementById("lists");

    let items = lists.querySelectorAll("li");
    console.log(items);

    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.toLowerCase().includes(value)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";

        }
    }

});



