/* inspiration from
https://cz.pinterest.com/pin/830703093796717544/
*/

const bodyElement = document.body;
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY; // Vertical scroll position
  console.log(scrollTop);

  if (scrollTop > 49) {
    bodyElement.classList.add("header-fixed");
  } else {
    bodyElement.classList.remove("header-fixed");
  }
});