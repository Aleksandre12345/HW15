const dachera = document.getElementById('nikoloza')
dachera.addEventListener('click',function meore(){
    const gela = document.getElementById('input')
    const geimuraz = document.getElementById('false')
    const tengizi = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if(!tengizi.test(gela.value)) {
        geimuraz.innerHTML = 'Oops! Please check your email'
        geimuraz.style.color = 'red'
    }
    else {
        geimuraz.innerHTML = 'Email Request Accepted'
        geimuraz.style.color = 'green'
    }
})

