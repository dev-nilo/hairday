import dayjs from "dayjs"

const form = document.querySelector('form')
const selectedDate = document.getElementById('date')

const todayInput = dayjs(new Date()).format('YYYY-MM-DD')

selectedDate.value = todayInput
selectedDate.min = todayInput

form.onsubmit = (event) => {
    event.preventDefault()

    console.log('enviado')
}