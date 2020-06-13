//Variables
const country1 = document.querySelector('#country1'),
	dropdownCountry1 = document.querySelector('.dropdown__country1')

const country2 = document.querySelector('#country2'),
	dropdownCountry2 = document.querySelector('.dropdown__country2')

const country3 = document.querySelector('#country3'),
	dropdownCountry3 = document.querySelector('.dropdown__country3')



//Data
const city = [
		
		"Albania ",
        "Andorra",
        "Armenia",
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia & Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "Netherlands",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "United Kingdom",
        "Vatican City"
]



//EventListeners
country1.addEventListener('input', () => {
	showCity(country1, dropdownCountry1)
})

dropdownCountry1.addEventListener('click', () => {
	selectCity(event, country1, dropdownCountry1)
})

//////////////////////////////////////////////////

country2.addEventListener('input', () => {
	showCity(country2, dropdownCountry2)
})

dropdownCountry2.addEventListener('click', () => {
	selectCity(event, country2, dropdownCountry2)
})

//////////////////////////////////////////////////

country3.addEventListener('input', () => {
	showCity(country3, dropdownCountry3)
})

dropdownCountry3.addEventListener('click', () => {
	selectCity(event, country3, dropdownCountry3)
})





//Functions
function showCity(input, list) {
	list.textContent = ''

    if (input.value !== '') {
        const filterCity = city.filter((item) => {  
            return item.toLowerCase().includes(input.value.toLowerCase())
        })
        
        filterCity.forEach((item) => {
            const li = document.createElement('li')
            li.classList.add('dropdown__city')
            li.textContent = item
            list.append(li)
            console.log(li)
        }) 
    }
}

function selectCity(event, input, list) {
	input.value = event.target.textContent
	list.textContent = ''
}