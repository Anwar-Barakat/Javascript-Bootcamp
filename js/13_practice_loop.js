/*
  Products Practice : 
*/

let products = ['mouse', 'keyboard', 'pen', 'ipad', 'xiaomi', 'samsung'];
let colors = ['red', 'green', 'blue'];
let showColors = 5;


document.write(`<h1>Show ${showColors} Products</h1>`)
for (let i = 0; i < showColors; i++) {

    document.write(`
      <div>
        <h3 class="title">${i + 1}- ${products[i]}</h3>
      </div>`);

    for (let j = 0; j < colors.length; j++) {
        document.write(`<p class='color'>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join(",")}</p>`);
}