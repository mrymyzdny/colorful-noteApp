let $ = document
const inputElem = $.querySelector('.note-input')
const colorsBox = $.querySelectorAll('.color-box')
const addBtn = $.querySelector('.add-note')
const removeBtn = $.querySelector('.remove-note')
const noteContainer = $.querySelector('#note-container')

colorsBox.forEach(function(color) {
    color.addEventListener('click' , function (event) {
        inputElem.style.backgroundColor = color.style.backgroundColor
    })
}) 


function addNote () {
    let inputValue =  inputElem.value
    if (inputValue) {
        noteGenarator()
    } else {
       alert('Write a note')
    }
}

function noteGenarator () {

    let newDivElem = $.createElement('div')
    newDivElem.classList.add('note')
    newDivElem.innerHTML = inputElem.value
    newDivElem.style.backgroundColor = inputElem.style.backgroundColor
    noteContainer.append(newDivElem)
    inputElem.value = ''
    inputElem.style.backgroundColor = '#ffff'
    inputElem.focus()
    // newDivElem.addEventListener('click' , function (event) {
    //     event.target.remove()
    // })
}

// function removeNote () {
//     noteContainer.innerHTML = ''
//     inputElem.value = ''
//     inputElem.style.backgroundColor = '#ffff'
// }



// shorter way to remove from dom  - ghesmat 264
noteContainer.addEventListener('click' , function (event) {
    if (event.target.tagName === 'DIV') {
        event.target.remove()
    }
})

addBtn.addEventListener('click' , addNote)
// removeBtn.addEventListener('click' , removeNote)
inputElem.addEventListener('keydown' , function (event) {
    if (event.keyCode === 13) {
        addNote()
    }
})