const button = document.querySelector('button')

window.onload = () => {
    getAdvice()
}

button.addEventListener('click', () => {
    getAdvice() 
})

async function getAdvice() {
    const data =  await fetch('https://api.adviceslip.com/advice')
    .then(data => data.json())
    .then((json) => {
        document.querySelector('p').textContent = `"${json.slip.advice}"`
        document.querySelector('span').textContent = `#${json.slip.id}`
    })
    .catch(error => alert(error))
}
