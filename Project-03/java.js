 const Shirts = [
    {
      name: "Tulip",
      color: "yellow",
      image:
        "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
    },
    {
      name: "Daffodil",
      color: "yellow",
      image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
    },
    {
      name: "Sunflower",
      color: "yellow",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
    },
    {
      name: "Bluebell",
      color: "blue",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
    },
    {
      name: "Rose",
      color: "red",
      image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
    }
  ];
  
  const ul = document.querySelector("ul");
  
  //---------- RENDER NAMES TO PAGE
  
  function renderShirtsToPage(Shirts) {
    for (let i = 0; i < Shirts.length; i++) {
      let list_item = document.createElement("li");
      list_item.classList.add(Shirts[i].color, "card");
      // add shirt name
      let title = document.createElement("h3");
      title.textContent = Shirts[i].name;
      // add shirt color
      let color = document.createElement("p");
      color.classList.add(Shirts[i].color);
      color.textContent = Shirts[i].color;
  
      let image = document.createElement("img");
      image.setAttribute("src", Shirts[i].image);
      // append created elements to page
      ul.appendChild(list_item);
      list_item.appendChild(title);
      list_item.appendChild(color);
      list_item.appendChild(image);
    }
  }
  renderShirtsToPage(Shirts);
  
  //---------- FILTER shirts BY COLOR
  
  let filterBtns = document.querySelector(".filters");
  let cards = document.querySelectorAll(".card");
  
  function filterFn(e) {
    // console.log("clicked", e.target);
    if (e.target.classList.contains("filter-btn")) {
      filterBtns.querySelector(".active").classList.remove("active");
  
      e.target.classList.add("active");
  
      const filterValue = e.target.getAttribute("data-filter");
  
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains(filterValue) || filterValue === "all") {
          cards[i].classList.remove("hide");
          cards[i].classList.add("show");
        } else {
          cards[i].classList.remove("show");
          cards[i].classList.add("hide");
        }
      }
    }
  }
  filterBtns.addEventListener("click", filterFn);
  