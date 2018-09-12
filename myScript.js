const catImg = document.getElementsByClassName('petCat')[0];
const catCount = document.querySelector('.cat-counter');
let catCountNum = Number(catCount.innerHTML);

catImg.addEventListener('click', function(){
console.log(catCountNum);
catCountNum += 1;
catCount.innerHTML=catCountNum;
});  
