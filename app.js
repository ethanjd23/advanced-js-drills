let fruits = ["apple", "orange", "tomato"];
let leastFav;
function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);
    function printFavFruit() {
        console.log(favFruit);
        leastFav = fruits[1];
    }
    console.log(leastFav);
    printFavFruit();
};
printFruits();
someFunc();
function someFunc(){
    console.log("Hello Ethan");
};
newFunc();
function newFunc() {
    alert("text of my choosing");
}