/*
  Higher order function (Forach)
*/

let allList = document.querySelectorAll('ul lu');

allList.forEach((element) => {

    element.onclick = function() {
        // first, remove active class 
        allList.forEach((ele) => {
            ele.classList.remove('active');
        });

        // then, add the active class on this element
        this.classList.add('active');
    }
});