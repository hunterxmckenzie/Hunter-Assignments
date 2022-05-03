 const Shirts = [
    {
      name: "2010 'Bon Iver, Bon Iver' Tour",
      color: "2010's",
      image:
        "https://www.dropbox.com/s/ogtbea8d9eldyww/2010%20bon%20iver%20bon%20iver.jpg?raw=1"
      band: "Bon Iver"
      },
    {
      name: "2020 'I,i' Tour",
      color: "2010's",
      image: "https://www.dropbox.com/s/38k0wkonug8b4o0/2020%20I%20Comma%20I.png?raw=1"
      band: "Bon Iver"
    },
    {
      name: "2014 '22, A Million' Tour",
      color: "2010's",
      image:
        "https://www.dropbox.com/s/di8m9pkw5c4v2ny/2014%2022%20a%20million.jpg?raw=1"
      band: "Bon Iver"
      },
    {
      name: "2007 'For Emma Forever Ago' Tour",
      color: "2000's",
      image:
        "https://www.dropbox.com/s/aq2ouvzfsbo2fix/2010%20Bon%20Iver.jpg?raw=1"
      band: "Bon Iver"
      },
    {
      name: "1994 'Blue Album' Tour",
      color: "1990's",
      image:
        "https://www.dropbox.com/s/dm14q2oh4l69x82/1994%20Weezer%20Blue%20Album%20Tour.jpg?dl=0"
      band: "Weezer"
      },
    {
      name: "2019 'Father of the Bride' Bootleg",
      color: "2010's",
      image:
        "https://www.dropbox.com/s/7lns89fp0x5p8q0/2019%20Father%20of%20the%20Bride%20Bootleg.jpg?dl=0"
      band: "Vampire Weekend"
      },
    {
      name: "2013 'Modern Vampires of the City' Tour",
      color: "2010's",
      image:
     "https://www.dropbox.com/s/c5i6fdiqv4ne3hy/2013%20Modern%20Vampires%20of%20the%20City%20Tour.jpg?dl=0"
     band: "Vampire Weekend"
    },
    {
      name: "2013 'Modern Vampires of the City' Tour Alternate",
      color: "2010's",
      image:
     "https://www.dropbox.com/s/x9oi7a28fra4wum/2013%20Modern%20Vampires%20of%20the%20City%20Tour%202.jpg?dl=0"
     band: "Vampire Weekend"
    },
    {
      name: "2020 'The New Abnormal' Album Release Bootleg",
      color: "2020's",
      image:
     "https://www.dropbox.com/s/fbdo458328uww9w/2020%20The%20Strokes%20Bootleg%20New%20Abnormal.jpg?dl=0"
     band: "The Strokes"
    },
    {
      name: "2002 'Is This It' Tour",
      color: "2000's",
      image:
     "https://www.dropbox.com/s/mnw955bhtsia2xc/2002%20The%20Strokes%20Is%20This%20It%20Tour.jpg?dl=0"
     band: "The Strokes"
    },
    {
      name: "2001 'Is This It' Tour",
      color: "2000's",
      image:
     "https://www.dropbox.com/s/6fm1rwap36zwrdp/2001%20The%20Strokes%20Is%20This%20It%20Tour.jpg?dl=0"
     band: "The Strokes"
    },
    {
      name: "1982 'Come Dancing' Tour",
      color: "1980's",
      image:
     "https://www.dropbox.com/s/7xk8uruuzeb6xdh/02122149-1982-The-Kinks-Come-Dancing-Tour-Shirt-FRONT.jpg?dl=0"
     band: "The Kinks"
    },
    {
      name: "1980 'Low Budget' Tour",
      color: "1980's",
      image:
     "https://www.dropbox.com/s/7xk8uruuzeb6xdh/02122149-1982-The-Kinks-Come-Dancing-Tour-Shirt-FRONT.jpg?dl=0"
     band: "The Kinks"
    },
    {
      name: "1980 'One For the Road' Tour",
      color: "1980's",
      image:
     "https://www.dropbox.com/s/k827ik0zakasqk6/3a4b409ffd68c89f6038b639a72782cd.jpg?dl=0"
     band: "The Kinks"
    },
    {
      name: "2022 Bootleg",
      color: "2020's",
      image:
     "https://www.dropbox.com/s/zdv5lvj8hhxowws/2022%20Bootleg.jpg?dl=0"
      band: "Rolling Stones"
    },
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
      let band = document.createElement("p");
      band.classList.add(Shirts[i].band);
      band.textContent = Shirts[i].band;
     
  
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
      console.log('clicked', event.target)
  
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
  
  //search engine for name of shirts, currently without images//

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

 function renderSearchShirts(searched){
   console.log('Shirts'.toLowerCase)
   clearList();
   for(i=0; i <searched.length; i++){
     let list_item = document.createElement('li');
     list_item.textContent = searched[i].name;

     ul.appendChild(list_item)
     
   }


 //From class, ascending and descending//

 function sortingFn(event){
     console.log(event.target);
     if(event.target.classList.contains("filter-btn")){
         //do something
        const filterValue = event.target.getAttribute("data-filter");

        if(filterValue == "ascending"){
            //write sort logic
            flowers.sort(function(a, b){
                if(a.name < b.name){
                    return -1;
                }
                if(a.name > b.name){
                    return 0;
                }
            })
            console.log('sorted', flowers);
            ul.innerHTML =""
            renderShirtsToPage(Shirts)

        } else if (filterValue === "descending") {
            //write reverse logic
            Shirts.reverse();
            console.log('reversed', Shirts)
            //clear the page of unsorted shirts
            ul.innerHTML ="";
            renderShirtsToPage(Shirts)

        }
     }
    }
  }