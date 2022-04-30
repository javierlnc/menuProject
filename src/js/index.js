const menu =[
    {
        id : 1,
        title : "Carne a la mexica",
        category: "carnes",
        price : 60.000,
        img : "./imagenes/carnes/itemCarne1.jpg",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem autem debitis. Eaque ducimus aliquid molestiae consequatur fuga dolorem at recusandae assumenda porro architecto, facilis ipsa exercitationem eum voluptate impedit!",
    },
    {
        id : 2,
        title : "Solomo 3/4",
        category: "carnes",
        price : 45.000,
        img : "./imagenes/carnes/itemCarne2.jpg",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem autem debitis. Eaque ducimus aliquid molestiae consequatur fuga dolorem at recusandae assumenda porro architecto, facilis ipsa exercitationem eum voluptate impedit!",
    },
    {
        id : 2,
        title : "Doble carne, Doble queso",
        category: "hamburguesas",
        price : 40.000,
        img : "./imagenes/hamburguesas/hamburguesa1.jpg",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem autem debitis. Eaque ducimus aliquid molestiae consequatur fuga dolorem at recusandae assumenda porro architecto, facilis ipsa exercitationem eum voluptate impedit!",
    },
    {
        id : 3,
        title : "hamburguesa sencilla",
        category: "hamburguesas",
        price : 30.000,
        img : "./imagenes/hamburguesas/hamburguesa2.jpg",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem autem debitis. Eaque ducimus aliquid molestiae consequatur fuga dolorem at recusandae assumenda porro architecto, facilis ipsa exercitationem eum voluptate impedit!",
    },
    {
        id : 4,
        title : "SuperBuguer",
        category: "hamburguesas",
        price : 60.000,
        img : "./imagenes/hamburguesas/hamburguesa3.jpeg",
        description : "Sper ipsum dolor sit amet consectetur adiisicing elit. Eveniet rem autem debitis. Eaque ducimus aliquid molestiae consequatur fuga dolorem at recusandae assumenda porro architecto, facilis ipsa exercitationem eum voluptate impedit!",
    },
    {
        id : 5,
        title : "Pasta con pollo",
        category: "pollo",
        price : 40.000,
        img : "./imagenes/pollo/pollo1.jpg",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem autem debitis. Eaque ducimus aliquid molestiae consequatur fuga dolorem at recusandae assumenda porro architecto, facilis ipsa exercitationem eum voluptate impedit!",
    },
    {
        id : 6,
        title : "Pechuga en salsa bechamet",
        category: "pollo",
        price : 33.000,
        img : "./imagenes/pollo/pollo2.jpg",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem autem debitis. Eaque ducimus aliquid molestiae consequatur fuga dolorem at recusandae assumenda porro architecto, facilis ipsa exercitationem eum voluptate impedit!",
    },
    {
        id : 7,
        title : "Rollos de pollo",
        category: "pollo",
        price : 55.000,
        img : "./imagenes/pollo/pollo3.jpg",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem autem debitis. Eaque ducimus aliquid molestiae consequatur fuga dolorem at recusandae assumenda porro architecto, facilis ipsa exercitationem eum voluptate impedit!",
    },
]
const menuContainer = document.getElementById("menu-container");
window.addEventListener('DOMContentLoaded',function() {
    console.log('Shake and bate');
    let displayMenu = menu.map((item) => {
        return `<article class="menu-item">
        <img src="${item.img}" alt="${item.title}" class="item-photo">
        <div class="item-info">
            <header class="item-header">
                <h2>${item.title}</h2>
                <p>$ ${item.price}</p>
            </header>
            <p class="item-description">${item.description}
            </p>
        </div>
    </article>`
    })
    displayMenu = displayMenu.join('')
    menuContainer.innerHTML = displayMenu;
    
})