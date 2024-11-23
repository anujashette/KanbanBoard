const addbtn = document.querySelector(".addBtn")
const modal = document.querySelector(".modal-container")
const textArea = document.querySelector('#desc')
const mainCont = document.querySelector('.main-cont')
const allPriorityColors = document.querySelectorAll('.filter-color')
const deletebtn = document.querySelector(".deleteBtn")

let flag = false
let ticketColor = 'bgcolor-light-orange'

// Modal open or close on add button click
addbtn.addEventListener("click", function () {
    flag = !flag;

    if (flag) {
        modal.style.display = "flex"
    } else {
        modal.style.display = "none"
    }
});

function createTicket(id, color, description) {
    let ticket = document.createElement('div')
    ticket.setAttribute('class', 'bgcolor-dark-black ticket-container')

    ticket.innerHTML = `<div class="${color} ticket-status"></div>
        <div class="bgcolor-light-black ticket-id">
            <h3>${id}</h3>
        </div>
        <div class="bgcolor-light-black ticket-desc">
            <p>${description}</p>
        </div>`
    
    mainCont.appendChild(ticket)
}

// Take input to create ticket
textArea.addEventListener('keydown', function (e) {
    if (e.key === 'Shift') {
        let description = textArea.value
        let id = (Math.random(0, 1) * 10000).toFixed(0)
        createTicket(id, ticketColor, description)
        textArea.value = ''
        ticketColor = 'bgcolor-light-orange'
        modal.style.display = "none"
    }
})

// Get the task color based on prioity

allPriorityColors.forEach(function(color) {
    color.addEventListener('click', function(e) {
        let selectColor = e.target.classList[0]
        // console.log(selectColor);
        ticketColor = selectColor
    })
});