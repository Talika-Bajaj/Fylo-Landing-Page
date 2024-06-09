const inputBtn = document.getElementsByClassName('input-btn');
// const input = document.getElementById('input-email');
const input = document.getElementsByClassName('mail');
const errors = document.getElementsByClassName('error');
Array.from(inputBtn).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        validateEmail(index);
        console.log('i am clicked');
        // errors[index].style.display = 'block';
        if (index === 1) {
            errors[index].style.color = 'white';
        }
    })
});

function validateEmail(index) {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input[index].value.match(pattern)) {
        console.log('right');
        errors[index].style.display = 'none';
        input[index].value = '';
        input[index].style.borderColor = 'hsl(0, 0%, 75%)';
    } else {
        console.log('wrong');
        errors[index].style.display = 'block';
        // document.getElementById('input-email').value = '';
        input[index].style.border = '2px solid red';
    }
}