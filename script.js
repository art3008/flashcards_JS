const addCard   = document.getElementById('add_card')
const addForm   = document.getElementById('add_form')
const closeForm = document.getElementById('close_form')
const saveCard  = document.getElementById('save_card')
const question  = document.getElementById('question')
const answer    = document.getElementById('answer')
const flashcards = document.getElementById('flashcards')

addCard.addEventListener('click', () => {

    addForm.style.display = 'block'

})


closeForm.addEventListener('click', () => {

    addForm.style.display = 'none'

})


saveCard.addEventListener('click', () => {
    console.log(`${question.value} --- ${answer.value}`);

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
    flashcards.appendChild(flashcard)
    



}