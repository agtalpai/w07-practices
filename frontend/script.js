const menuButtonComponent = function () {
    return `<button id="menu-btn"><button/>`;
}


const loadEvent = function () {
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent() );

    const menuButtonElement = document.getElementById("menu-btn");

    const beerSectionComponent = function(title, sub, text, id) {
        return `
        <section id="${id}">
        <h1 class="beerName">${title}</h1>
        <h2 class="beerCompany">${sub}</h2>
        <h3 class="beerType">${text}</h3>
        </section>
        `
    }

    const beerAnchorsComponent = function (title, id){
        return`
            <a href ="${id}">${title}</a>
        `
    }

    const beerNavComponent = function (inner){
        return `
            <nav>${inner}</nav>
        `
    }

    menuButtonElement.addEventListener("click", function (event) {

        event.currentTarget.classList.toggle("clicked");
        // console.log(rootElement);
        // console.log(event.currentTarget.closest("#root"));
        event.currentTarget.closest("#root").classList.toggle("menu-opened");
    })

    let beerSections = "";
    
    for (const beer of beers.cards) {
        beerSections += beerSectionComponent(beer.title, beer.sub, beer.text);
    }
    rootElement.insertAdjacentHTML("beforeend", beerSections);
    //console.log(beerSections);

    let beerAnchors = "";


    for (const beer of beers.cards) {
        beerAnchors += beerAnchorsComponent(beer.title)
    }

    rootElement.insertAdjacentHTML("beforeend", beerNavComponent(beerAnchors))

    const navBarElement = document.getElementById("menu-btn");
    
    navBarElement.addEventListener("click", menuButtonClickedEvent)

};


window.addEventListener("load", loadEvent);