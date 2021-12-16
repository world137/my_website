let list = document.querySelectorAll('.navigation li');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item) =>
item.addEventListener('mouseover',activeLink));

let toggle = document.querySelector('.toggle')
let navigation = document.querySelector('.navigation')
let main = document.querySelector('.main')

toggle.onclick = function(){
    navigation.classList.toggle('active')
    main.classList.toggle('active')

}
function show(type){
    document.querySelector('.textBox').value = type;
    if(type == "high school"){
        console.log("world")
    }
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}