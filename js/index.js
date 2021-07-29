// Load your images on page-load
function preloader() {
    const imagesPaths = [
       "./img/1.jpg",
       "./img/2.jpg",
       "./img/3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);





/* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
let ul = document.querySelector('nav ul');
let listItems = ul.children;
// console.log(listItems);

function handleClick(ev) {
    // move the id-attribute to the currently clicked button
    let currentItem = ev.target;
    // console.log(currentItem);

    // loop through the list of all nav-items
    for (let i = 0; i < listItems.length; i++) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
        // if nav-item contans attribute type of id
        if (listItems[i].hasAttribute('id')) {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
            // remove the attribute type of 'id'
            listItems[i].removeAttribute('id');
        }
    }

    // add attribute to the currently clicked element
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    currentItem.setAttribute('id', 'active');
}

// registering list items for click event:
// listItems[0].addEventListener('click', handleClick);
// listItems[1].addEventListener('click', handleClick);
// listItems[2].addEventListener('click', handleClick);

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', handleClick);
}

/* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
    
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */






// getting references

    let $dc = document.getElementById('dynamic-content');




// resource
const data = {
    partial1: {
        heading: 'Solar Energy',
        imageURL: './img/1.jpg',
        imageAlt: '...',
        bodyText: 'Solar power is energy from the sun that is converted into thermal or electrical energy. Solar energy is the cleanest and most abundant renewable energy source available, and the U.S. has some of the richest solar resources in the world. <br/><br/> Solar technologies can harness this energy for a variety of uses, including generating electricity, providing light or a comfortable interior environment, and heating water for domestic, commercial, or industrial use.</p>'
    },
    partial2: {
        heading: 'Wind Energy',
        imageURL: './img/2.jpg',
        imageAlt: '...',
        bodyText: 'Wind energy has been used for centuries to pump water, process farm products and power industrial applications. In modern times, wind turbines are most often used to generate electricity for export to the electricity grid. <br/><br/> Wind is an attractive fuel source for many reasons; it’s renewable, it’s abundant, it produces no greenhouse gas emissions or other toxic emissions, the fuel is free, and as the global installed wind turbine capacity continues to accelerate, it’s becoming increasingly more cost-effective.'
    },
    partial3: {
        heading: 'Bio Energy',
        imageURL: './img/3.jpg',
        imageAlt: '...',
        bodyText: 'Bioenergy is one of many diverse resources available to help meet our demand for energy. It is a form of renewable energy that is derived from recently living organic materials known as biomass, which can be used to produce transportation fuels, heat, electricity, and products. <br/><br/> Bioenergy is a versatile renewable energy source. It can be converted into liquid transportation fuels that are equivalent to fossil-based fuels, such as gasoline, jet, and diesel fuel. Bioenergy technologies enable the reuse of carbon from biomass and waste streams into reduced-emissions fuels for cars, trucks, jets and ships; bioproducts; and renewable power.'
    }
};

// create the initial page markup:
let markup = `<section id="banner">
                <div class="content">
                    <header>
                        <h1>${data.partial1.heading}</h1>
                        <p>${data.partial1.bodyText}</p>
                    </header>

                    <ul class="actions">
                        <li>
                            <a href="#" class="button big">Learn More</a>
                        </li>
                    </ul>

                </div>

                <span class="image object">
                        <img src="${data.partial1.imageURL}" alt="" />
                </span>
            </section>`;

$dc.innerHTML = markup;


// create the initial page markup:
let markup1 = `<section id="banner">
                <div class="content">
                    <header>
                        <h1>${data.partial2.heading}</h1>
                        <p>${data.partial2.bodyText}</p>
                    </header>

                    <ul class="actions">
                        <li>
                            <a href="#" class="button big">Learn More</a>
                        </li>
                    </ul>

                </div>

                <span class="image object">
                        <img src="${data.partial2.imageURL}" alt="" />
                </span>
            </section>`;


// create the initial page markup:
let markup2 = `<section id="banner">
                <div class="content">
                    <header>
                        <h1>${data.partial3.heading}</h1>
                        <p>${data.partial3.bodyText}</p>
                    </header>

                    <ul class="actions">
                        <li>
                            <a href="#" class="button big">Learn More</a>
                        </li>
                    </ul>

                </div>

                <span class="image object">
                        <img src="${data.partial3.imageURL}" alt="" />
                </span>
            </section>`;




