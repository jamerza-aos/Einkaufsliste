const input = document.getElementById('userinput')
const ul = document.querySelector('ul')



const addItem = () => {
    let li = document.createElement('li')
    let newItem = input.value
    li.append(newItem)
    ul.append(li)
    input.value = ""
}

document.getElementById('enter').addEventListener('click', addItem)
document.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        addItem()
    }
})