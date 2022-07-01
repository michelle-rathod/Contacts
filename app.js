const form = document.querySelector('#form');
const personName = document.querySelector('#person');
const contactNum = document.querySelector('#num');
const list = document.querySelector('#list');
const buttonClass = document.querySelector('.button-new');
let submitCount = 0;
const maxCount = 9
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (submitCount < maxCount) {
        const input1 = personName.value;
        const input2 = contactNum.value;
        const newLi = document.createElement('li');
        const newBtn = document.createElement('button');
        newBtn.classList.add('button-new');
        newBtn.innerText = 'Delete';
        newLi.innerText = input1 + ": " + input2;
        list.append(newLi);
        newLi.append(newBtn);
        personName.value = '';
        contactNum.value = '';
        submitCount += 1;

        newBtn.addEventListener('click', function (btn) {
            newLi.remove();
        });
    } else {
        alert('Max Limit Reached')
    }
});




