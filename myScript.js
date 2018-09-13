const catImg = document.getElementsByClassName('petCat')[0];
const catImg2 = document.getElementsByClassName('petCat2')[0];
const catCount = document.querySelector('.cat-counter');
const catCount2 = document.querySelector('.cat-counter2');
let catCountNum = Number(catCount.innerHTML);
let catCountNum2 = Number(catCount2.innerHTML);

catImg.addEventListener('click', function(){
   // if(event.target.classList.contains('petCat') ) {
console.log(catCountNum);
catCountNum += 1;
catCount.innerHTML=catCountNum;
    });
//}, false);  

catImg2.addEventListener('click', function(){
  //  if(event.target.classList.contains('petCat') ) {
console.log(catCountNum2);
catCountNum2 += 1;
catCount2.innerHTML=catCountNum;
});
//}, false);  

