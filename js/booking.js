const services = [
    { title: "Select a service", price: '--' },
    { title: "Haircut", price: 100 },
    { title: "Beard", price: 50 },
];

const timings = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"]

const serviceSelector = document.getElementById('select-service');
const price = document.getElementById('price');
const timingList = document.getElementById('timings');
const time = document.getElementById('time');
const dateSelector = document.getElementById('select-date');

// currentDate = new Date();
// console.log(currentDate.getDate());
dateSelector.min = new Date().toLocaleDateString('en-ca');
dateSelector.max = new Date(new Date().setDate(new Date().getDate() + 7)).toLocaleDateString('en-ca');


let options = ''
services.forEach(service => {
    let str = `<option value="${service.title}" >${service.title}</option>`
    options = options + str;
})
serviceSelector.innerHTML = options;

timings.forEach(time => timingList.innerHTML = timingList.innerHTML + `<button onclick="handleTimeChange(this)" class="button">${time}</button>`)

const handleServiceChange = (event) => {
    // console.log(event.value);
    let newPrice = services.find((service) => service.title === event.value)['price'];
    price.innerHTML = `<label>Price</label> <br> ${newPrice}`
}

const handleTimeChange = (event) => {
    // console.log(event);
    let newTime = event.innerText;
    time.innerHTML = `<label>Time</label> <br> ${newTime}`
}

