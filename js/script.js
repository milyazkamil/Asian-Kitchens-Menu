let all = document.getElementById("all");
let main = document.getElementById("main");
let korea = document.getElementById("korea");
let japan = document.getElementById("japan");
let china = document.getElementById("china");

let menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "korea",
    price: "10.99 $",
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: "Spicy rice cakes, serving with fish cake.",
  },
  {
    id: 2,
    title: "Bibimbap",
    category: "korea",
    price: "8.99 $",
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: "Boiling vegetables, serving with special hot sauce.",
  },
  {
    id: 3,
    title: "Jajangmyeon",
    category: "korea",
    price: "15.99 $",
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: "Black bean sauce noodle, serving with green onion.",
  },
  {
    id: 4,
    title: "Chicken Ramen",
    category: "japan",
    price: "7.99 $",
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.",
  },
  {
    id: 5,
    title: "Onigiri",
    category: "japan",
    price: "9.99 $",
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: "Rice Sandwich, serving with soy sauce.",
  },
  {
    id: 6,
    title: "Doroyaki",
    category: "japan",
    price: "3.99 $",
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: "Red bean paste dessert, serving with honey.",
  },
  {
    id: 7,
    title: "Dan Dan Mian",
    category: "china",
    price: "5.99 $",
    img: "https://foodhub.scene7.com/is/image/woolworthsltdprod/2105-dan-dan-noodle-soup:Square-1300x1300",
    desc: "Dan dan noodle, serving with green onion.",
  },
  {
    id: 8,
    title: "Yangzhou Fried Rice",
    category: "china",
    price: "12.99 $",
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: "Yangzhou style fried rice, serving with bean and pickles.",
  },
  {
    id: 9,
    title: "Ma Yi Shang Shu",
    category: "china",
    price: "12.99 $",
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: "Hot pepper sauce noodle, serving with soy bean and onion.",
  },
]

all.addEventListener("click", () => {
  changeFood(menu);
});

korea.addEventListener("click", () => {
  let koreaArray = [];

  menu.forEach((food) => {
    if (food.category === "korea") {
      koreaArray.push(
        {
          id: food.id,
          title: food.title,
          category: food.category,
          price: food.price,
          img: food.img,
          desc: food.desc
        }
      );
    }
  });

  changeFood(koreaArray);
});

japan.addEventListener("click", () => {
  let japanArray = [];

  menu.forEach((food) => {
    if (food.category === "japan") {
      japanArray.push(
        {
          id: food.id,
          title: food.title,
          category: food.category,
          price: food.price,
          img: food.img,
          desc: food.desc
        }
      );
    }
  });

  changeFood(japanArray);
});

china.addEventListener("click", () => {
  let chinaArray = [];

  menu.forEach((food) => {
    if (food.category === "china") {
      chinaArray.push(
        {
          id: food.id,
          title: food.title,
          category: food.category,
          price: food.price,
          img: food.img,
          desc: food.desc
        }
      );
    }
  });

  changeFood(chinaArray);
});

function changeFood(food) {
  main.innerHTML = "";

  food.forEach((e) => {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("center");

    let imgDiv = document.createElement("div");

    let namePriceDiv = document.createElement("div");
    namePriceDiv.classList.add("name-price-div");

    let otherDiv = document.createElement("div");
    otherDiv.classList.add("other-div");

    let img = document.createElement("img");
    img.classList.add("images");

    let foodTitle = document.createElement("h2");
    foodTitle.classList.add("food-title");

    let price = document.createElement("h2");
    price.classList.add("price");

    let desc = document.createElement("p");
    desc.classList.add("desc");

    img.src = e.img;
    desc.innerHTML = e.desc;
    price.innerHTML = e.price;
    foodTitle.innerHTML = e.title;
    
    imgDiv.append(img);
    namePriceDiv.append(foodTitle, price);
    otherDiv.append(namePriceDiv, desc);

    mainDiv.append(imgDiv, otherDiv);
    main.append(mainDiv);
  });
}

changeFood(menu);