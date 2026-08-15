document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const targetText = "Hello,World!";
const speed = 120;
let index = 0;
const HelloWorldText = document.getElementById("HelloWorldText");
const projectDiv = document.getElementById("project-div");
const lookMore = document.getElementById("look-more");
const moreProject = document.getElementById("more-project");
const moreReturn = document.getElementById("more-return");
function typeDel() {
        if (index > 0) {
            index--;
            HelloWorldText.innerHTML = targetText.substring(0, index);
            setTimeout(typeDel, speed);
        }
        else {
            setTimeout(() => {
                typeWriter();
            },2000)
        }
}
function typeWriter() {
    if (index < targetText.length) {
        HelloWorldText.innerHTML = targetText.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(typeDel, 2000);
    }
}
typeWriter();
lookMore.onclick = () => {
    moreProject.style.visibility = "visible";
    moreProject.style.opacity = "1";
}
moreReturn.onclick = () => {
    moreProject.style.opacity = "0";
    setTimeout(() => {
        moreProject.style.visibility = "hidden";
    },500)
}