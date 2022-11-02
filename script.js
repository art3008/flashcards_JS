const addCard       = document.getElementById('add_card')
const addForm       = document.getElementById('add_form')
const closeForm     = document.getElementById('close_form')
const saveCard      = document.getElementById('save_card')
const question      = document.getElementById('question')
const answer        = document.getElementById('answer')
const flashcards    = document.getElementById('flashcards')
let newArr          = []


    
console.log(localStorage.getItem('items'));

addCard.addEventListener('click', () => {
    addForm.style.display = 'block'
})


closeForm.addEventListener('click', () => {
    addForm.style.display = 'none'
})


saveCard.addEventListener('click', () => {
    add()
})

function add(){
    let h2_question = document.createElement('h2')
    let h2_answer = document.createElement('h2')
    let flashcard = document.createElement('div')

    flashcard.className = 'flashcard'
    h2_question.innerText = question.value
    h2_answer.innerHTML = answer.value

    flashcard.appendChild(h2_question)
    flashcard.appendChild(h2_answer)
    flashcards.appendChild(flashcard)
    
    flashcard.addEventListener('click', () => {
        h2_answer.style.display == 'none' ? h2_answer.style.display = 'block' : h2_answer.style.display = 'none'
    })

    addLocSto()

}

function addLocSto() {
    
    let flash = {
        "question": question.value,
        "answer": answer.value,
    }

    newArr.push(flash)
    localStorage.setItem('items', JSON.stringify(newArr))

}


// function showList() {

//     let arrList = JSON.parse(localStorage.getItem('items'))
//     let newEx = ''

//     console.log(arrList.length);


//     for(idx of arrList) {
//         newEx = idx.answer
//     }
    
//     console.log(newEx);

// }