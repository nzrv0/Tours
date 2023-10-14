const url = "https://course-api.com/react-tours-project";
const tours = document.querySelector(".tours");
const button = document.querySelector(".delete_button");

fetchAllQuestions(url);

async function fetchAllQuestions(url) {
    let data = await getData(url);
    setTimeout(() => {
        createElement(data);
    }, 0);
    console.log(data);
}

function createElement(data) {
    for (let i = 0; i < data.length; i++) {
        console.log(data);
        // creating tour div
        let tour = document.createElement("div");
        tour.className = "tour";
        tours.appendChild(tour);

        // creating tour image
        let tour_image = document.createElement("IMG");
        tour_image.className = "tour_image";
        tour_image.setAttribute("src", data[i].image);
        tour.appendChild(tour_image);

        // creating tour price
        let tour_price = document.createElement("span");
        tour_price.className = "tour_price";
        tour_price.innerHTML = `$ ${data[i].price}`;
        tour.appendChild(tour_price);

        // creating tour description
        let tour_description = document.createElement("div");
        tour_description.className = "tour_description";
        tour.appendChild(tour_description);

        // creating tour title
        let tour_title = document.createElement("h5");
        tour_title.className = "tour_description_title";
        tour_title.innerHTML = data[i].name;
        tour_description.appendChild(tour_title);

        // creating tour paragraph
        let tour_paragraph = document.createElement("p");
        tour_paragraph.className = "tour_description_paragraph";
        tour_paragraph.innerHTML = data[i].info.slice(0, 200);
        tour_description.appendChild(tour_paragraph);

        // creating tour delete button
        let tour_button = document.createElement("button");
        tour_button.className = "delete_button";
        tour_button.innerText = "Not Interested";
        tour_button.addEventListener("click", () => tour.remove());
        tour_description.appendChild(tour_button);
    }
}

async function getData(url) {
    try {
        const response = await fetch(url);
        const tours = await response.json();
        return tours;
    } catch (err) {
        console.log(err);
    }
}
