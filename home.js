
function tosignup() {
    
    window.location.href = 'signup.html'
}


function tologin() {
    
    window.location.href = 'login.html'
}

function tohome() {
    
    window.location.href = 'home.html'

}

function imageBox() {

    const arr = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oRJ6SZTx-33jXYFfSOv6LAHaDt%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.owSf33SoCjMwReQIgZbOAAHaEK%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dJW36AyKbnmP58Mgh1iVHAHaC9%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dJW36AyKbnmP58Mgh1iVHAHaC9%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mpYQdWD3jII3dipFAJctTgHaC9%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mpYQdWD3jII3dipFAJctTgHaC9%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Dh10-2Js9-Y_G6TAzZNizAHaCf%26pid%3DApi&f=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Urddn0YiOQovvxSRyl9MEAHaCe%26pid%3DApi&f=1"];

    var div = document.getElementById('imageBox');

    var image = document.createElement('img');

    image.src = arr[0];

    let i = 0;
    image.setAttribute("class","image")
    div.append(image);

    setInterval(function () {
        if (i == arr.length) {
            i = 0;
        }
        image.src = arr[i];

        i++;
    }, 2000);
}
imageBox();


const movies = [
    { name: "Nobody", rating: 7.4, year:2021, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fCPqUhx0tZAvJHeW1Wc6qwHaJQ%26pid%3DApi&f=1" },
    { name: "Wrath of Man", rating: 7.2, year:2021, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MrFZ3Ts7uV90eujCStt7HQHaK-%26pid%3DApi&f=1" },
    { name: "Tomorrow war", rating: 6.6, year:2021, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cGO4NiRJ-wYiiC35qcb37gEsHG%26pid%3DApi&f=1" },
    { name: "Far from Home", rating: 8.2, year:2019, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9Eg5ZHPvgqrJleIng4n3iAHaLH%26pid%3DApi&f=1" },
    { name: "Gifted", rating: 8.7, year:2017, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4Fb6M0cXJht6ZIRi_AajqAHaK9%26pid%3DApi&f=1" },
    { name: "Drishyam 2", rating: 8.9, year: 2021, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.iIDYE_b5PdYhGx9vXGYWXQAAAA%26pid%3DApi&f=1" },   
    { name: "No Time to Die", rating:7.7, year:2021, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mXs5sRzOG0hcscfbdq83CQHaK9%26pid%3DApi&f=1" },
    { name: "Tenet", rating: 7.4, year:2020, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vm6c6wGWFKXzdzuBR8DrMAHaK-%26pid%3DApi&f=1" },
    { name: "Greyhound", rating: 7, year:2020, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XNOIj7HcIjUexcf094VE9QHaK_%26pid%3DApi&f=1" },
];



if (localStorage.getItem('movies') == null) {
    localStorage.setItem('movies', JSON.stringify(movies));
}


function movieGrid(x) {

    let data = x;

    let main_div = document.getElementById("movies");

    main_div.innerHTML = null;

    data.forEach(function (el) {
        
        let aux_div = document.createElement("div");
        

        let p_name = document.createElement("p");
        p_name.innerHTML = `Movie: ${el.name}`;

        let p_rating = document.createElement("p");
        p_rating.innerHTML = `Rating : ${el.rating}`;

        let p_date = document.createElement("p");
        p_date.innerHTML = `Year : ${el.year}`;

        let p_image = document.createElement("img");
        p_image.src = el.image;

        aux_div.append(p_image,p_name, p_rating, p_date);
        aux_div.setAttribute("class", "class")
        main_div.append(aux_div);
        

    })


}

movieGrid(JSON.parse(localStorage.getItem('movies')));

function lToh() {
    
    let items = JSON.parse(localStorage.getItem('movies'));

    
    items.sort(function (a, b) {
        return a.rating - b.rating;
    })

    movieGrid(items);

}



function hTol() {
    
    var items = JSON.parse(localStorage.getItem('movies'));

    items.sort(function (a, b) {
        return b.rating - a.rating;
    })

    movieGrid(items);

}