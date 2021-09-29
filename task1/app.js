let proj1 = document.getElementById("project1");
let pBtn1 = document.getElementById("projBtn1");
proj1.addEventListener("mouseover", function () {
    pBtn1.style.backgroundColor = "purple";
    pBtn1.style.color = "white";
})
proj1.addEventListener("mouseleave", function () {
    pBtn1.style.backgroundColor = "white";
    pBtn1.style.color = "black";
});
let proj2 = document.getElementById("project2");
let pBtn2 = document.getElementById("projBtn2");
proj2.addEventListener("mouseover", function () {
    pBtn2.style.backgroundColor = "purple";
    pBtn2.style.color = "white";
})
proj2.addEventListener("mouseleave", function () {
    pBtn2.style.backgroundColor = "white";
    pBtn2.style.color = "black";
});
let proj3 = document.getElementById("project3");
let pBtn3 = document.getElementById("projBtn3");
proj3.addEventListener("mouseover", function () {
    pBtn3.style.backgroundColor = "purple";
    pBtn3.style.color = "white";
})
proj3.addEventListener("mouseleave", function () {
    pBtn3.style.backgroundColor = "white";
    pBtn3.style.color = "black";
});
let proj4 = document.getElementById("project4");
let pBtn4 = document.getElementById("projBtn4");
proj4.addEventListener("mouseover", function () {
    pBtn4.style.backgroundColor = "purple";
    pBtn4.style.color = "white";
})
proj4.addEventListener("mouseleave", function () {
    pBtn4.style.backgroundColor = "white";
    pBtn4.style.color = "black";
});
let project = document.querySelectorAll("#project");

for (i in project) {
    let pBtn = project.querySelector("#projBtn");
    i.proj3.addEventListener("mouseover", function () {
        pBtn.style.backgroundColor = "purple";
        pBtn.style.color = "white";
    });
    proj3.addEventListener("mouseleave", function () {
        pBtn3.style.backgroundColor = "white";
        pBtn3.style.color = "black";
    });
}
// var project = document.querySelector(".one");
// var btn = document.querySelector(".btn");
// project.addEventListener("mouseover", function () {
//     btn.style.backgroundColor = "purple";
// })