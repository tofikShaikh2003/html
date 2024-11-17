// let p = document.getElementById("password");

// console.log(p);

// let cf = document.getElementById("cf-password");

// console.log(cf);

// let sub = document.querySelector("form-submit-btn");

// console.log(sub);



// if(p !== cf) {
//     console.log('pless enter your Confirm Password')
// }




// let btn = document.getElementById("sub")

// console.log(btn)

// btn.onclick = () => {
//     console.log(btn);
// }









function info() {

let name = document.getElementById("fullName").value;
console.log(name);

let username = document.getElementById("username").value;
console.log(username);

let email = document.getElementById("email").value;
console.log(email);

let phone = document.getElementById("phoneNumber").value;
console.log(phone);

let password = document.getElementById("password").value;
// console.log(password);

let com_password = document.getElementById("cf-password").value;
// console.log(com_password);


if(!name || !username || !email || !phone || !password || !com_password) {
    alert("Please fill in all fields")
}



    if(password !== com_password) {
        alert('please enter your confirm password');
    }

}



let btn = document.getElementById("sub")

btn.addEventListener('click', () => {
    console.log(info())
});





// const onFormSubmit = (e) => {
//     console.log(e.preventDefault())
//     console.log("form submit")
// }

// const formEventListner = () => {
//     const registerForm = document.getElementById('register-form');
//     registerForm.addEventListener('submit',onFormSubmit)
//     // console.log("registerForm")
//     console.log(registerForm)
// }

// formEventListner()





