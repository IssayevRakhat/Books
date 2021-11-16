function addFavourite1() {
let fav=
     {name:"The Hobbit",
     author:"J.R.R. Tolkien",
     genre:"Fantasy",
     rating:"8.7/10"}

if(localStorage.getItem(1)==null){ 
localStorage.setItem(1,JSON.stringify(fav));
}else{localStorage.setItem(2,JSON.stringify(fav));
}}

function addFavourite2() {
let fav=
     {name:"The Gunslinger",
     author:"Stephen King",
     genre:"Fantasy",
     rating:"8.9/10"}
if(localStorage.getItem(1)==null){ 
localStorage.setItem(1,JSON.stringify(fav));
}else{localStorage.setItem(2,JSON.stringify(fav));
}}