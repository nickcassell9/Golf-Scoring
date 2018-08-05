const CreateUser = document.querySelector('.CreateUser')
CreateUser.addEventListener('submit', (e) => {
    console.log('bitch')
    e.preventDefault();
    const email = CreateUser.querySelector('.email').value;
    const password = CreateUser.querySelector('.password').value;
    const first_name = CreateUser.querySelector('.first_name').value;
    const last_name = CreateUser.querySelector('.last_name').value;
    post('/user/', { email, password, first_name, last_name })
})

const Login = document.querySelector('.Login')
Login.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = Login.querySelector('.email').value;
    const password = Login.querySelector('.password').value;
    post('/user/login', { email, password })
        .then(({ status }) => {
            if (status === 200) alert('login success')
            else alert('login failed')
        })
});

function post (path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}