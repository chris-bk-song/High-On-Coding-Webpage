// header
// - h1
// - nav
//   - a
//   - a


const container = document.getElementById("container");

document.body.style.fontFamily = "sans-serif";

const header = document.createElement("header");
header.style.color = "white";
header.style.backgroundColor = "rgb(114,166,247)";
header.style.display = "flex";
header.style.padding = "0 20px";

const heading1 = document.createElement("h1");
heading1.textContent = "HighOnCoding";
heading1.style.paddingRight = "85px";
header.appendChild(heading1);

const topNav = document.createElement("nav");
topNav.style.display = "flex";
topNav.style.alignItems = "center";
header.appendChild(topNav);

const link1 = document.createElement("a");
link1.textContent = "Home";
link1.href = "#";
link1.style.paddingRight = "85px";
link1.style.color = "white";
link1.style.fontWeight = "bold";
link1.style.fontSize = "18px";
link1.style.textDecoration = "none";
topNav.appendChild(link1);

const link2 = document.createElement("a");
link2.textContent = "Categories";
link2.style.fontSize = "18px";
link2.style.textDecoration = "none";
link2.href = "#";
link2.style.color = "white";
topNav.appendChild(link2);

container.appendChild(header);


// Top portion of the body
const topDiv = document.createElement("div");
topDiv.style.color = "rgb(84,89,96)";
topDiv.style.backgroundColor = "rgb(221,222,224)";
topDiv.style.display = "flex";
topDiv.style.flexDirection = "column";
topDiv.style.padding = "20px";
topDiv.style.margin = "20px";

const heading2 = document.createElement("h2");
heading2.textContent = "Curse of the Current Reviews";
heading2.style.marginTop = "0";
topDiv.appendChild(heading2);

const paragraph1 = document.createElement("p");
paragraph1.style.color = "black";
paragraph1.textContent = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.";
paragraph1.style.marginBottom = "0";
topDiv.appendChild(paragraph1);

container.appendChild(topDiv);

// Middle portion of the body
const middleDiv = document.createElement("div");
middleDiv.style.color = "rgb(31,113,198)";
middleDiv.style.backgroundColor = "white";
middleDiv.style.display = "flex";
middleDiv.style.flexDirection = "column";

middleDiv.style.padding = "10px 20px";

const heading3 = document.createElement("h3");
heading3.textContent = "Hello WatchKit";
// heading3.style.fontWeight = "px";
heading3.style.marginTop = "0";
middleDiv.appendChild(heading3);

const paragraph2 = document.createElement("p");
paragraph2.style.color = "black";
paragraph2.textContent = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";
paragraph2.style.marginTop = "0";
paragraph2.style.marginBottom = "0";
middleDiv.appendChild(paragraph2);

const paragraph3 = document.createElement("p");
paragraph3.style.backgroundColor = "rgb(242,144,25)";
paragraph3.style.color = "white";
paragraph3.textContent = "12 Comments 124 likes";
paragraph3.style.marginTop = "0";
paragraph3.style.padding = "7px";
middleDiv.appendChild(paragraph3);

container.appendChild(middleDiv);

// Bottom portion of the body
const bottomDiv = document.createElement("div");
bottomDiv.style.color = "rgb(31,113,198)";
bottomDiv.style.backgroundColor = "white";
bottomDiv.style.display = "flex";
bottomDiv.style.flexDirection = "column";
bottomDiv.style.padding = "0 20px";

const heading4 = document.createElement("h3");
heading4.textContent = "Introduction to Swift";
heading4.style.marginTop = "0";
bottomDiv.appendChild(heading4);

const paragraph4 = document.createElement("p");
paragraph4.style.color = "black";
paragraph4.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.";
paragraph4.style.marginTop = "0";
paragraph4.style.marginBottom = "0";
bottomDiv.appendChild(paragraph4);

const paragraph5 = document.createElement("p");
paragraph5.style.backgroundColor = "rgb(242,144,25)";
paragraph5.style.color = "white";
paragraph5.textContent = "15 Comments 45 likes";
paragraph5.style.marginTop = "0";
paragraph5.style.padding = "7px";
bottomDiv.appendChild(paragraph5);

container.appendChild(bottomDiv);


// Couldn't figure out how to change fontWeight for the two headings: Hello WatchKit and Introduction to Swift