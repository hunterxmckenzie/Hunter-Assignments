const Shirts = [
    {
      name: "2010 Bon Iver Bon Iver Tour",
      color: "2010's",
      band: "Bon Iver",
      image:
        "https://www.dropbox.com/s/ogtbea8d9eldyww/2010%20bon%20iver%20bon%20iver.jpg?raw=1"
    },
    {
      name: "2020 'I,i' Tour",
      color: "2010's",
      band: "Bon Iver",
      image: "https://www.dropbox.com/s/38k0wkonug8b4o0/2020%20I%20Comma%20I.png?raw=1"
    },
    {
      name: "2014 '22, A Million' Tour",
      color: "2010's",
      band: "Bon Iver",
      image:
        "https://www.dropbox.com/s/di8m9pkw5c4v2ny/2014%2022%20a%20million.jpg?raw=1"
    },
    {
      name: "2007 'For Emma Forever Ago' Tour",
      color: "2000's",
      band: "Bon Iver",
      image:
        "https://www.dropbox.com/s/aq2ouvzfsbo2fix/2010%20Bon%20Iver.jpg?raw=1"
    },
    {
      name: "",
      color: "",
      band: "",
      image: ""
    }
  ];
  
  const ul = document.querySelector("ul");
  let searchBar = document.querySelector('input')

  //---------- RENDER NAMES TO PAGE
  
  function renderShirtsToPage(Shirts) {
    for (let i = 0; i < Shirts.length; i++) {
        console.log(Shirts[i])
      let list_item = document.createElement("li");
      list_item.classList.add(Shirts[i].color, "card");
      // add shirt name
      let title = document.createElement("h3");
      title.textContent = Shirts[i].name;
      // add shirt color
      let color = document.createElement("p");
      color.classList.add(Shirts[i].color);
      color.textContent = Shirts[i].color;
      // add band name
     
  
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
  
  //search engine for name of shirts//

  function searchShirts(event){
    let searchString = event.target.value;
     console.log(searchString)
 
     const searchedName = Shirts.filter(function(Shirts){
         if(searchString){
             return Shirts.name.includes(searchString)
         }
     })
     renderSearchedShirts(searchedName)
 }
 
 function renderSearchedShirts(searched){
 console.log('line 64:', searched)
 clearList();
 for(i=0; i <searched.length; i++){
     let list_item = document.createElement('li');
     list_item.textContent = searched[i].name;
 
     ul.appendChild(list_item)
     }
 }
 
 function clearList(){
     ul.innerHTML = ""
 }
 
 searchBar.addEventListener('keyup', searchShirts)