function copy(text){
    navigator.clipboard.writeText(text)
}

function alert(){
    let alert = document.querySelector('.alert')
    alert.classList.remove("hide")
    alert.classList.add("show")
    alert.classList.add("showAlert")
    setTimeout(() => {
        alert.classList.add("hide")
        alert.classList.remove("show")
    }, 3000);
}
function hide(){
    let alert = document.querySelector('.alert')
    alert.classList.add("hide")
    alert.classList.remove("show")
}
function send(){
    window.location.href = "mailto:world.chayapol@gmail.com?cc=&subject=" + encodeURIComponent("") + "&body=" + encodeURIComponent("")
}
function opengithub(){
    window.open("https://github.com/world137")
}
function opencodepen(){
    window.open("https://codepen.io/world137")
}
function openfacebook(){
    window.open("https://www.facebook.com/profile.php?id=100070536824293")
}