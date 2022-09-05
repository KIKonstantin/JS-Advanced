function addItem() {
    // selec input field and read it's value
    const input = document.getElementById('newItemText');
    // create <li> element and assign input value to element text content
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    // select <ul> and append new element
    document.getElementById('items').appendChild(liElement);
    // select input field and clear contents (value)
    input.value = '';
}