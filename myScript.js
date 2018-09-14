/* const catImg = document.getElementsByClassName('petCat')[0];
const catImg2 = document.getElementsByClassName('petCat2')[0];
const catCount = document.querySelector('.cat-counter');
const catCount2 = document.querySelector('.cat-counter2');
let catCountNum = Number(catCount.innerHTML);
let catCountNum2 = Number(catCount2.innerHTML);

// Adds number of pets to cat 1's counter
catImg.addEventListener('click', function(){
   // if(event.target.classList.contains('petCat') ) {
console.log(catCountNum);
catCountNum += 1;
catCount.innerHTML=catCountNum;
    });
//}, false);  

// Adds number of pets to cat 2's counter 
//TODO: Get function to work!
catImg2.addEventListener('click', function(){
  //  if(event.target.classList.contains('petCat') ) {
console.log(catCountNum2);
catCountNum2 += 1;
catCount2.innerHTML=catCountNum;
});
//}, false);  */

/* ================== Model =============== */

let model = {
  currentCat: null,
  cats: [
    {
      clickCount : 0,
      name: 'Cat 1',
      imgSrc : 'kitten.jpg'
      //imgAttribution  : 'www.pixelbay.com'
    },
    {
      clickCount : 0,
      name: 'Cat 2',
      imgSrc : 'kitten-2.jpg'
      //imgAttribution  : 'www.pixelbay.com'
    }
  ]
}


/* ======= Octopus ======= */

let octopus = {

    init: function() {
        // set our current cat to the first one in the list
        model.currentCat = model.cats[0];

        // tell our views to initialize
        catListView.init();
        catView.init();
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    getCats: function() {
        return model.cats;
    },

    // set the currently-selected cat to the object passed in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // increments the counter for the currently-selected cat
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }
};


/* ======= View ======= */

let catView = {

    init: function() {
        // store pointers to our DOM elements for easy access later
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        // on click, increment the current cat's counter
        this.catImageElem.addEventListener('click', function(){
            octopus.incrementCounter();
        });

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        // update the DOM elements with values from the current cat
        let currentCat = octopus.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

let catListView = {

    init: function() {
        // store the DOM element for easy access later
        this.catListElem = document.getElementById('cat-list');

        // render this view (update the DOM elements with the right values)
        this.render();
    },

    render: function() {
        let cat, elem, i;
        // get the cats we'll be rendering from the octopus
        let cats = octopus.getCats();

        // empty the cat list
        this.catListElem.innerHTML = '';

        // loop over the cats
        for (i = 0; i < cats.length; i++) {
            // this is the cat we're currently looping over
            cat = cats[i];

            // make a new cat list item and set its text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            // on click, setCurrentCat and render the catView
            // (this uses our closure-in-a-loop trick to connect the value
            //  of the cat letiable to the click event function)
            elem.addEventListener('click', (function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));

            // finally, add the element to the list
            this.catListElem.appendChild(elem);
        }
    }
};

// make it go!
octopus.init();