const dishes = [
    {
        id: 0,
        type: "dinner",
        title: "Sushi assortiti",
        src: "1.jpg",
        price: 14.99,
        description: "Assortimento di sushi con salmone, tonno, gambero, avocado, riso e alga nori"
    },
    {
        id: 1,
        type: "dinner",
        title: "Ramen di maiale",
        src: '2.jpg',
        price: 10.99,
        description: "Brodo di maiale con noodles, pancetta, uovo, cipolla verde, funghi shiitake e germogli di soia"
    },
    {
        id: 2,
        type: "dinner",
        title: "Gyoza di verdure",
        src: '1.jpg',
        price: 5.99,
        description: "Ravioli ripieni di cavolo cinese, funghi shiitake, carote e zenzero, serviti con salsa di soia e aceto di riso"
    },
    {
        id: 3,
        type: "dinner",
        title: "Tempura di gamberi",
        src: '2.jpg',
        price: 8.99,
        description: "Gamberi fritti in pastella leggera con verdure miste (carote, zucchine, cipolle), serviti con salsa tonkatsu"
    },
    {
        id: 4,
        type: "dinner",
        title: "Yakitori di pollo",
        src: '1.jpg',
        price: 6.99,
        description: "Spiedini di pollo alla griglia con salsa teriyaki e cipolla verde"
    },
    {
        id: 5,
        type: "dinner",
        title: "Soba di grano saraceno",
        src: '2.jpg',
        price: 7.99,
        description: "Noodles di grano saraceno in brodo di dashi con tempura di gamberi, cipolla verde e uova di quaglia"
    },
    {
        id: 6,
        type: "dinner",
        title: "Tataki di tonno",
        src: '1.jpg',
        price: 12.99,
        description: "Fettine di tonno rosso scottate con salsa ponzu, sesamo e cipolla rossa"
    },
    {
        id: 7,
        type: "dinner",
        title: "Unagi sushi",
        src: '2.jpg',
        price: 9.99,
        description: "Sushi con anguilla alla griglia, riso e alga nori"
    },
    {
        id: 8,
        type: "dinner",
        title: "Katsu di maiale",
        src: '1.jpg',
        price: 8.99,
        description: "Cotoletta di maiale impanata con cavolo cinese, servita con salsa tonkatsu e riso"
    },
    {
        id: 9,
        type: "dinner",
        title: "Sake nigiri",
        src: '2.jpg',
        price: 3.99,
        description: "Sushi con salmone crudo, riso e alga nori"
    },
    {
        id: 10,
        type: "breakfast",
        title: "Pancakes alla banana",
        src: "1.jpg",
        price: 7.50,
        description: "Pancakes soffici e dorati serviti con fettine di banana fresca e sciroppo d'acero."
    },
    {
        id: 11,
        type: "breakfast",
        title: "Uova alla benedict",
        src: "2.jpg",
        price: 9.00,
        description: "Due uova poché servite su un muffin inglese con prosciutto cotto e salsa olandese."
    },
    {
        id: 12,
        type: "breakfast",
        title: "Toast alla francese",
        src: "1.jpg",
        price: 6.50,
        description: "Fette di pane bianco inzuppate in una miscela di uova, latte e vaniglia, poi cotte in padella e servite con burro e sciroppo d'acero."
    },
    {
        id: 13,
        type: "breakfast",
        title: "Waffle ai frutti di bosco",
        src: "2.jpg",
        price: 8.50,
        description: "Waffle belgi croccanti serviti con frutti di bosco freschi, panna montata e sciroppo d'acero."
    },
    {
        id: 14,
        type: "breakfast",
        title: "Muesli con yogurt greco",
        src: "1.jpg",
        price: 5.50,
        description: "Una miscela di muesli croccante, frutta fresca e yogurt greco cremoso."
    },
    {
        id: 15,
        type: "first-Course",
        title: "Spaghetti alla carbonara",
        src: "2.jpg",
        price: 12.50,
        description: "Una deliziosa pasta italiana con uova, pancetta, parmigiano e pepe nero."
    },
    {
        id: 16,
        type: "lunch",
        title: "Penne all'arrabbiata",
        src: "1.jpg",
        price: 10.50,
        description: "Penne rigate con salsa di pomodoro piccante, aglio e peperoncino rosso."
    },
    {
        id: 17,
        type: "lunch",
        title: "Ravioli di zucca",
        src: "2.jpg",
        price: 14.00,
        description: "Ravioli ripieni di zucca, ricotta e parmigiano, serviti con burro fuso e salvia."
    },
    {
        id: 18,
        type: "lunch",
        title: "Linguine al pesto",
        src: "1.jpg",
        price: 11.00,
        description: "Linguine con pesto alla genovese fatto in casa, pomodorini e scaglie di parmigiano."
    },
    {
        id: 19,
        type: "lunch",
        title: "Tagliatelle al ragù",
        src: "2.jpg",
        price: 13.50,
        description: "Tagliatelle fatte in casa con un delizioso ragù di carne e pomodoro."
    },
    {
        id: 20,
        type: "shakes",
        title: "Caffè americano",
        src: "1.jpg",
        price: 2.50,
        description: "Caffè nero forte servito in una tazza grande."
    },
    {
        id: 21,
        type: "shakes",
        title: "Caffè latte",
        src: "2.jpg",
        price: 3.00,
        description: "Caffè espresso con latte caldo e vellutato."
    },
    {
        id: 22,
        type: "shakes",
        title: "Cappuccino",
        src: "1.jpg",
        price: 3.50,
        description: "Caffè espresso con latte caldo e schiuma di latte."
    },
    {
        id: 23,
        type: "shakes",
        title: "Frullato di fragole",
        src: "2.jpg",
        price: 4.50,
        description: "Frullato di fragole fresche con latte e gelato alla vaniglia."
    },
    {
        id: 24,
        type: "shakes",
        title: "Succo d'arancia",
        src: "1.jpg",
        price: 3.00,
        description: "Succo d'arancia appena spremuto.",
    },
];

// RENDERIZZA A SCHERMO I PIATTI LA PRIMA VOLTA CHE SI VISITA IL SITO, MOSTRANDO TUTTI I PIATTI SENZA FILTRI.

function renderItems() {
    const containerMenu = document.createElement('div');
    containerMenu.classList.add('container__menu');

    for (let i = 0; i < dishes.length; i++) {
        containerItem = document.createElement('div');
        containerItem.classList.add('container__item')
        containerMenu.appendChild(containerItem);
        const img = document.createElement('img');
        img.setAttribute('src', dishes[i].src);
        containerItem.appendChild(img);

        const itemHeader = document.createElement('div');
        itemHeader.classList.add('item-header');

        const itemTitle = document.createElement('p');
        itemTitle.textContent = dishes[i].title;
        itemHeader.appendChild(itemTitle);
        const itemPrice = document.createElement('p');
        itemPrice.textContent = dishes[i].price;
        itemHeader.appendChild(itemPrice);
        containerItem.appendChild(itemHeader);

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('description')
        itemDescription.textContent = dishes[i].description;
        containerItem.appendChild(itemDescription);
    };

    const generalContainer = document.querySelector('.container');
    generalContainer.appendChild(containerMenu);
};


// RENDERIZZA I PIATTI CHE SONO STATI FILTRATI E LI MOSTRA SULLO SCHERMO IN BASE A QUALE CATEGORIA VIENE CLICCATA

function renderFilteredItems(filter) {
    const containerMenu = document.createElement('div');
    containerMenu.classList.add('container__menu');

    for (let i = 0; i < filter.length; i++) {
        containerItem = document.createElement('div');
        containerItem.classList.add('container__item')
        containerMenu.appendChild(containerItem);
        const img = document.createElement('img');
        img.setAttribute('src', filter[i].src);
        containerItem.appendChild(img);

        const itemHeader = document.createElement('div');
        itemHeader.classList.add('item-header');

        const itemTitle = document.createElement('p');
        itemTitle.textContent = filter[i].title;
        itemHeader.appendChild(itemTitle);
        const itemPrice = document.createElement('p');
        itemPrice.textContent = filter[i].price;
        itemHeader.appendChild(itemPrice);
        containerItem.appendChild(itemHeader);

        const itemDescription = document.createElement('p');
        itemDescription.classList.add('description')
        itemDescription.textContent = filter[i].description;
        containerItem.appendChild(itemDescription);
    };

    const generalContainer = document.querySelector('.container');
    generalContainer.appendChild(containerMenu);
};

addEventListener('DOMContentLoaded', renderItems());


const breakfastBtn = document.querySelector('.section-breakfast');

//FILTRA I VARI PIATTI DELL'ARRAY IN BASE AL CLICK E LI IMMAGAZZINA IN UN ALTRO ARRAY, POI CHIAMA LA FUNZIONE PER MOSTRARE A SCHERMO CIO' CHE E' STATO FATTO.

function updateItems() {
    const btnCategories = document.querySelectorAll('.btn-categories');
    btnCategories.forEach(function (item, index) {
        item.addEventListener('click', () => {
            switch (index) {
                case 0:
                    var gContainer = document.querySelector('.container__menu');
                    gContainer.remove();
                    renderFilteredItems(dishes);
                    break;

                case 1:
                    var gContainer = document.querySelector('.container__menu');
                    gContainer.remove();
                    const breakfastFilter = dishes.filter(function (dish) { return dish.type === 'breakfast' });
                    renderFilteredItems(breakfastFilter);
                    break;

                case 2:
                    var gContainer = document.querySelector('.container__menu');
                    gContainer.remove();
                    const lunchFilter = dishes.filter(function (dish) { return dish.type === 'lunch' });
                    renderFilteredItems(lunchFilter);
                    break;

                case 3:
                    var gContainer = document.querySelector('.container__menu');
                    gContainer.remove();
                    const shakesFilter = dishes.filter(function (dish) { return dish.type === 'shakes' });
                    renderFilteredItems(shakesFilter);
                    break;

                case 4:
                    var gContainer = document.querySelector('.container__menu');
                    gContainer.remove();
                    const dinnerFilter = dishes.filter(function (dish) { return dish.type === 'dinner' });
                    console.log(dinnerFilter);
                    renderFilteredItems(dinnerFilter);
                    break;
            };
        });
    });
};
updateItems();
