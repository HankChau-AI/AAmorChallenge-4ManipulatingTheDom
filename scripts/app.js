//alert("Works");

let btnChange1 = document.getElementById("btnChange1");
let btnChange2 = document.getElementById("btnChange2")
let btnChange3 = document.getElementById("btnChange3")

// console.log(btnChange1);

let affectMe1 = document.getElementById("affectMe1");
let affectMe2 = document.getElementById("affectMe2")
let affectMe3 = document.getElementById("affectMe3")

// console.log(affectMe1);

btnChange1.addEventListener("click", function(event){
    // alert("Button Clicked")
    affectMe1.innerText = "Hello grader, thank you for your time";
});

btnChange2.addEventListener("click", function(event){
    affectMe2.innerText = "I had a great three day weekend";
    affectMe2.className = "newStyle";

});

btnChange3.addEventListener("click", function(event){
    affectMe3.innerText = "I do like to code time to time";
    affectMe3.className = "newStyle " + "barrelRoll";

});

btnChange4.addEventListener("click", function(event){
    affectMe4.innerText = "My lunch was very good today";
    affectMe4.className = "newStyle " + "rollerRight";

});

btnChange5.addEventListener("click", function(event){
    affectMe5.innerText = "Hawk Tuah";
    affectMe5.className = "newStyle " + "bounceIn";

});

btnChange6.addEventListener("click", function(event){
    var img = document.createElement("img");
    img.src = "/assets/AllForOneFlowChart.drawio (1).png";
    affectMe6.innerText = "This is a flowchart";
    img.height = 300;
    img.width = 300;
    affectMe6.appendChild(img);
    affectMe6.className = "newStyle " + "rotation";

});


btnChange7.addEventListener("click", function(event){
    var img = document.createElement("img");
    img.src = "/assets/peace.png";
    affectMe7.innerText = "";
    img.height = 300;
    img.width = 300;
    affectMe7.appendChild(img);
    affectMe7.className = "fadeOut";

});

btnChange8.addEventListener("click", function(event){
    var img = document.createElement("img");
    img.src = "/assets/download (3).jpg";
    affectMe8.innerText = "Why do the animations go on forever";
    img.height = 50;
    img.width = 50;
    affectMe8.appendChild(img);
    affectMe8.className = "newStyle " + "wiggle";

});

btnChange9.addEventListener("click", function(event){
    affectMe9.innerText = "I need to practice for loops because I am LOST";
    affectMe9.className = "newStyle " + "pulse";

});

btnChange10.addEventListener("click", function(event){
    affectMe10.innerText = "Mavericks taking the dub tonight against GSW";
    affectMe10.className = "newStyle " + "pound";

});
