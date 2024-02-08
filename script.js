//dom traverse
//5 methods

//get element by ID
//get elements by class name
//get elements by tag name
//query selector
//query selector all

//getElementById

// const text1 = document.getElementById("Text-1");
// text1.className = "text-center";
// text1.innerText = "Hello! Welcome";
// text1.innerHTML = "<strong>Hey! Whats up<strong/>";
// // console.log(text1);

// const text2 = document.getElementById("Text-2");
// text2.style.backgroundColor = "grey";
// text2.style.color = "white";

// //get elements by class name
// const text34 = document.getElementsByClassName("text-34");
// text34[0].style.backgroundColor = "blue";
// text34[1].style.backgroundColor = "green";

// // for (let i = 0; i < text34.length; i++) {
// //   texts[i].style.color = "white";
// // }

// //get elements by tag name
// const tags = document.getElementsByTagName("h2");
// for (let i = 0; i < tags.length; i++) {
//   tags[i].style.color = "black";
// }

// //query selector
// const he = document.querySelector("#Text-1");

// const he1 = document.querySelector(".Text-2");

// const he2 = document.querySelectorAll("h2");

// const input = document.querySelector("#input");
// input.value = "hey@gmail.com";

//

// const button = document.createElement("button");
// button.innerText = "submit";
// button.className = "btn btn-outline-primary";
// button.id = "unique-btn";

const container = document.getElementById("container");
// container.append(button);

// const cancelButton = document.createElement("button");
// cancelButton.innerText = "cancel";
// cancelButton.className = "btn btn-danger";
// cancelButton.style.marginLeft = "40px";

// container.append(cancelButton);

// const breakTag = document.createElement("br");
// container.append(breakTag);

// const h3 = document.createElement("h3");
// h3.innerText = "lorem lorem lorem";
// h3.style.color = "blue";
// h3.style.marginTop = "35px";
// h3.style.margin = "35px";
// container.append(h3);

// const ul = document.createElement("ul");
// ul.className = "list-group";
// container.append(ul);

// const li1 = document.createElement("li");
// li1.className = "list-group-item";
// li1.innerText = "An item";

// const li2 = document.createElement("li");
// li2.className = "list-group-item";
// li2.innerText = "An second item";
// const li3 = document.createElement("li");
// li3.className = "list-group-item";
// li3.innerText = "A third item";
// const li4 = document.createElement("li");
// li4.className = "list-group-item";
// li4.innerText = "A fourth item";
// const li5 = document.createElement("li");
// li5.className = "list-group-item";
// li5.innerText = "A fifth item and last";

// ul.append(li1, li2, li3, li4, li5);

const maincard = document.createElement("row row-cols-1 row-cols-md-3 g-4");
const card1 = document.createElement("card h-100");
card1.className = "card-group";
const img1 = document.createElement("img");
img1.src =
  "https://images.unsplash.com/photo-1555436170-91eaa01a4aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
card1.append(img1);
img1.className = "card-img-top";
const card2 = document.createElement("card h-100");
card2.className = "card-group";
img2.src =
  "https://images.unsplash.com/photo-1555436170-91eaa01a4aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
card2.append(img2);
img2.className = "card-img-top";

const card3 = document.createElement("card h-100");
card3.className = "card-group";
img3.src =
  "https://images.unsplash.com/photo-1555436170-91eaa01a4aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
card3.append(img3);
img3.className = "card-img-top";

const card4 = document.createElement("card h-100");
card4.className = "card-group";
img4.src =
  "https://images.unsplash.com/photo-1555436170-91eaa01a4aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
card4.append(img4);
img4.className = "card-img-top";

const card5 = document.createElement("card h-100");
card5.className = "card-group";
img5.src =
  "https://images.unsplash.com/photo-1555436170-91eaa01a4aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
card5.append(img5);
img5.className = "card-img-top";

const card6 = document.createElement("card 100");
card6.className = "card-group";
img6.src =
  "https://images.unsplash.com/photo-1555436170-91eaa01a4aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
card6.append(img6);
img6.className = "card-img-top";

const card7 = document.createElement("card h-100");
card7.className = "card-group";
img7.src =
  "https://images.unsplash.com/photo-1555436170-91eaa01a4aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
card7.append(img7);
img7.className = "card-img-top";

const card8 = document.createElement("card h-100");
card8.className = "card-group";
img8.src =
  "https://images.unsplash.com/photo-1555436170-91eaa01a4aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
card8.append(img8);
img8.className = "card-img-top";

const card9 = document.createElement("card h-100");
card9.className = "card-group";
img9.src =
  "https://images.unsplash.com/photo-1555436170-91eaa01a4aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80";
card9.append(img9);
img9.className = "card-img-top";

container.append(maincard);
maincard.append(card1, card2, card3, card4, card5, card6, card7, card8, card9);
