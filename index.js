const cardCoffee = document.getElementById("card");

function generateTable(targetId, data) {
  let parent = document.createElement("div");
  parent.className = "flip-cards-table";

  for (const element of data) {
    //document.getElementById("coffee-title").innerHTML=element.title;
    //console.log(elment);
    let flipCard = document.createElement("div");
    flipCard.className = "flip-card";
    let flipCardInner = document.createElement("div");
    flipCardInner.className = "flip-card-inner";

    let flipCardFront = document.createElement("div");
    flipCardFront.className = "flip-card-front";

    let image = document.createElement("img");
    image.src = element.image;
    image.style = "width:100%;height:100%;"


    let coffeTitle= document.createElement("h3");
    coffeTitle.textContent = element.title;
    let flipCardBack = document.createElement("div");
    flipCardBack.className = "flip-card-back";

    let p = document.createElement("p");
    p.textContent = element.description;
    flipCard.appendChild(flipCardInner);
    flipCardInner.appendChild(flipCardFront);
    flipCardFront.appendChild(coffeTitle);
    flipCardFront.appendChild(image);
    flipCardInner.appendChild(flipCardBack);
    flipCardBack.appendChild(p);
  
      parent.appendChild(flipCard)
  }
  document.getElementById(targetId).appendChild(parent)
}

if (document.getElementById("hot")!=null) {

  fetch("https://api.sampleapis.com/coffee/hot")
    .then((response) => {
        if (!response.ok) {
          throw new Error("Request failed");
        } else {
          return response.json();
        }
    })
  .then((data) =>{
    generateTable("hot", data)
  
  })


  .catch((error) => {
  console.error("An error occured:", error);
  });
}

if (document.getElementById("cold")!=null) {

  fetch("https://api.sampleapis.com/coffee/iced")
  .then((response) => {
     if (!response.ok) {
       throw new Error("Request failed");
     } else {
       return response.json();
     }
  })
  .then((data) =>{
   generateTable("cold", data)
   })

  .catch((error) => {
   console.error("An error occured:", error);
  }); 
}





  