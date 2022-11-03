const addCard       = document.getElementById('add_card')
const addForm       = document.getElementById('add_form')
const closeForm     = document.getElementById('close_form')
const saveCard      = document.getElementById('save_card')
const question      = document.getElementById('question')
const answer        = document.getElementById('answer')
const flashcards    = document.getElementById('flashcards')
const deleteCards   = document.getElementById('delete_cards')
let newArr        = localStorage.getItem('items') ? 
JSON.parse(localStorage.getItem('items')) : []

newArr.forEach(divMaker)


function divMaker(text) {
    let h2_question = document.createElement('h2')
    let h2_answer = document.createElement('h2')
    let flashcard = document.createElement('div')

    flashcard.className = 'flashcard'
    h2_question.innerHTML = question.value
    h2_answer.innerHTML = answer.value

    flashcard.appendChild(h2_question)
    flashcard.appendChild(h2_answer)



    flashcard.addEventListener('click', () => {
        h2_answer.style.display == 'none' ? 
        h2_answer.style.display = 'block' : h2_answer.style.display = 'none'
    })


    h2_question.innerHTML = text.my_question
    h2_answer.innerHTML = text.my_answer
    


    flashcards.appendChild(flashcard)

}


function showCreateCardForm() {
    addForm.style.display = 'block'
}

function hideCreateCardForm() {
    addForm.style.display = 'none'
}

function delFlashCards() {
    localStorage.clear()
    flashcards.innerHTML = ''
    newArr = []
}


function createCard() {
    let flashcard_info = {
        'my_question': question.value,
        'my_answer': answer.value,
    }

    newArr.push(flashcard_info)
    localStorage.setItem('items', JSON.stringify(newArr))

    divMaker(newArr[newArr.length - 1])
    question.value = ''
    answer.value = ''

}

addCard.addEventListener('click', showCreateCardForm)
closeForm.addEventListener('click', hideCreateCardForm)
saveCard.addEventListener('click', createCard)
deleteCards.addEventListener('click', delFlashCards)