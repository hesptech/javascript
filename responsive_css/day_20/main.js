/* hamburger button nav open/close toggle
 * init variable with dom element
 * init variable with dom element
 * variable with event listener method
 * variable with class add/delete
 */
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})



/* function calls dom element selected by class 
 * adds style parameter
 */
function myFunction() {
    //console.log('1', document.getElementById("panel"));
    //console.log('2', document.getElementsByClassName("sec-two__aside--row"));
    document.getElementsByClassName("sec-two__aside--row")[0].style.display = "none";
}



/* function calls dom element selected by id 
 * adds style parameter
 */
/* function myFunction() {
    console.log('eeeeeeeeee', document.getElementById("panel"));
    document.getElementById("panel").style.display = "none";
  }

const colorLi = document.querySelector('li[sign_up]'); */



/* nav bar button header color changer
 * init variable with dom element
 * init variable with custom property(css variable)
 */
const colorLi = document.querySelector('.sign_up');
const colorVariable = '--primary-clr';

colorLi.addEventListener('click', () => {
    console.log('3',colorLi, btntype);
    document.documentElement.style.setProperty(colorVariable, 'red');
})



/* header button color changer
 * init variable with type of dom element
 * event listenar on click 
 * document style change through custom property change
 */
const btntype = document.querySelector('a[type=sign_up]');

btntype.addEventListener('click', () => {
    console.log('333333');
    document.documentElement.style.setProperty(colorVariable, 'yellow')
}) 


const inputColorType = document.querySelector('input[type=color');

inputColorType.addEventListener('change', e => {
    console.log(e);
    document.documentElement.style.setProperty(colorVariable, e.target.value)
})