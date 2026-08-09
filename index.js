document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const targetText = "Hello,World!";
const speed = 120;
let index = 0;
const HelloWorldText = document.getElementById("HelloWorldText");
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