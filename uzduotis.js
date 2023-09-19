
let dataArr = [4, 5, -5556, 155, 640, '15x', 6789, -5564, 478, 654, 'obuolys', 789, -51, 55, -222, 0, -357, -56, 'trylika', 444, 7778, 4154, 4751]

let ulElement41 = document.querySelector('#task-41')
let ulElement42 = document.querySelector('#task-42')
let ulElement43 = document.querySelector('#task-43')
let ulElement44 = document.querySelector('#task-44')
let ulElement45 = document.querySelector('#task-45')
let ulElement46 = document.querySelector('#task-46')
let ulElement47 = document.querySelector('#task-47')
let ulElement48 = document.querySelector('#task-48')
let ulElement49 = document.querySelector('#task-49')
let ulElement410 = document.querySelector('#task-410')
let ulElement411 = document.querySelector('#task-411')
let ulElement412 = document.querySelector('#task-412')
let ulElement413 = document.querySelector('#task-413')
let ulElement414 = document.querySelector('#task-414')
let ulElement415 = document.querySelector('#task-415')


addTitleToList(ulElement41, `4.1 uzduotis`)
addTitleToList(ulElement42, `4.2 uzduotis`)
addTitleToList(ulElement43, `4.3 uzduotis`)
addTitleToList(ulElement44, `4.4 uzduotis`)
addTitleToList(ulElement45, `4.5 uzduotis`)
addTitleToList(ulElement46, `4.6 uzduotis`)
addTitleToList(ulElement47, `4.7 uzduotis`)
addTitleToList(ulElement48, `4.8 uzduotis`)
addTitleToList(ulElement49, `4.9 uzduotis`)
addTitleToList(ulElement410, `4.10 uzduotis`)
addTitleToList(ulElement411, `4.11 uzduotis`)
addTitleToList(ulElement412, `4.12 uzduotis`)
addTitleToList(ulElement413, `4.13 uzduotis`)
addTitleToList(ulElement414, `4.14 uzduotis`)
addTitleToList(ulElement415, `4.15 uzduotis`)



// 4.1. Tik skaičius (number tipo duomenis).

function task41(array){
for (let i = 0; i < array.length; i++) {
  let item = array[i]
  if (typeof item === 'number') {
    liElementCreator(ulElement41, item)
  }
}
}
task41(dataArr)
dataArr.map(function(item){
  if (typeof item === 'number'){
  liElementCreator(ulElement41, item)
  }
})

dataArr.forEach(function(item){
  if (typeof item === 'number'){
  liElementCreator(ulElement41, item)
  }
})

//4.2. Tik tekstą (string tipo duomenis).

for (let i = 0; i < dataArr.length; i++){
  let item = dataArr[i]
  if(typeof item === "string"){
    liElementCreator(ulElement42, item)
  }
}

dataArr.forEach(function(item){
  if(typeof item === 'string'){
    liElementCreator(ulElement42, item)
  }
})

dataArr.map(function(item){
  if(typeof item === 'string'){
    liElementCreator(ulElement42, item)
  }
})


// 4.3. Tik skaičius (number tipo duomenis) ir juos pakelti 4-tuoju laipsniu.

for (let i = 0; i < dataArr.length; i++){
  let item = dataArr[i]
  if(typeof item === 'number'){
    liElementCreator(ulElement43, Math.pow(item, 4))
  }
}

dataArr.forEach(function(item){
  if(typeof item === 'number'){
    liElementCreator(ulElement43, Math.pow(item, 4))
  }
})

dataArr.map(function(item){
  if(typeof item === 'number'){
    liElementCreator(ulElement43, Math.pow(item, 4))
  }
})

//4.4. Tik skaičius (number tipo duomenis) ir prie jų pridėti 55.

for (let i = 0; i < dataArr.length; i++){
  let item = dataArr[i]
  if(typeof item === 'number'){
    // console.log(item + 55)
    liElementCreator(ulElement44, (item + 55))
  }
}

dataArr.forEach(function(item){
  if(typeof item === 'number'){
    // console.log(item + 55)
    liElementCreator(ulElement44, (item + 55))
  }
})

dataArr.map(function(item){
  if(typeof item === 'number'){
    liElementCreator(ulElement44, (item + 55))
    // console.log(item + 55)
  }
})

// 4.5. Tik skaičius (number tipo duomenis) ir juos padalinti iš 2.

for (let i = 0; i < dataArr.length; i++){
  let item = dataArr[i]
  if(typeof item === 'number'){
    // console.log(item / 2)
    liElementCreator(ulElement45, (item / 2))
  }
}

dataArr.forEach(function(item){
  if(typeof item === 'number'){
    // console.log(item / 2)
    liElementCreator(ulElement45, (item / 2))
  }
})

dataArr.map(function(item){
  if(typeof item === 'number'){
    // console.log(item / 2)
    liElementCreator(ulElement45, (item / 2))
  }
})


// 4.6. Tik skaičius (number tipo duomenis) ir prieš juos pridėti teksta, tokiu formatu: "Number: 2".

for(let i = 0; i < dataArr.length; i++){
  let item = dataArr[i]
  if(typeof item === 'number'){
    // console.log(`Number: ${item}`)
    liElementCreator(ulElement46, `Number: ${item}`)
  }
}

dataArr.forEach(function(item){
  if(typeof item === 'number'){
    // console.log(`Number: ${item}`)
    liElementCreator(ulElement46, `Number: ${item}`)
  }
})

dataArr.map(function(item){
  if(typeof item === 'number'){
    // console.log(`Number: ${item}`)
    liElementCreator(ulElement46, `Number: ${item}`)
  }
})

//4.7. Tik skaičius (number tipo duomenis) ir pridėti tekstą su jų pačių indeksais, pvz.:
// "Index: 0, Number: 2"
// "Index: 1, Number: 3"
// "Index: 2, Number: 5"
// Ir t.t.

for(let i = 0; i < dataArr.length; i++){
  let item = dataArr[i]
  if(typeof item === 'number'){
    // console.log(`Index: ${i++} Number: ${item}`)
    liElementCreator(ulElement47, `Index: ${i++} Number: ${item}`)
  }
}

dataArr.forEach(function(item, index){
  if(typeof item === 'number'){
    // console.log(`Index: ${index} Number: ${item}`)

  }
})

dataArr.map(function(item, index){
  if(typeof item === 'number'){
    // console.log(`Index: ${index} Number: ${item}`)
  }
})


//4.8. Tik skaičius (number tipo duomenis) ir juos padauginti iš jų pačių indekso.

for (let i = 0; i < dataArr.length; i++) {
  let item = dataArr[i];
  if (typeof item === "number") {
    // console.log(item * i);
    liElementCreator(ulElement48, (item * i))
  }
}

dataArr.forEach(function(item, index){
  if(typeof item === "number"){
    // console.log(item * index)
  }
})

dataArr.map(function(item, index){
  if(typeof item === "number"){
    // console.log(item * index)
  }
})


// 4.9. Tik skaičius (number tipo duomenis) ir juos padauginti iš ankstesnio nario, pvz.:
//   - Pirmo skaičiaus dauginti nereikia.
//   - Antrą skaičių dauginti iš pirmo.
//   - Trečią skaičių dauginti iš antro.
//   - Ketvirta skaičių dauginti iš trečio.
//   - Penktą skaičių dauginti iš ketvirto.
//   Ir t.t.


let numArr = dataArr.filter(function (num) {
  return typeof num === 'number'
})

for(let i = 0; i < numArr.length; i++){
  let result = numArr[i] * numArr[i - 1]
  if (i > 0) {
    // console.log(result);
    liElementCreator(ulElement49, result)
  }
}

numArr.forEach(function (item, i) {
  let previousNum = numArr[i - 1];
  if (i > 0) {
    // console.log(item * previousNum);
    liElementCreator(ulElement49, (item * previousNum))
  }
});

numArr.map(function (item, i) {
  let previousNum = numArr[i - 1];
  if (i > 0) {
    // console.log(item * previousNum);
    liElementCreator(ulElement49, (item * previousNum))
  }
});



//4.10. Tik tuos skaičius (number tipo duomenis), kuriuos padauginus iš 5, atsakymas gaunasi didesnis už 350.

for (i = 0; i < dataArr.length; i++){
  let item = dataArr[i]
  if(typeof item === 'number' && item * 5 > 350){
    // console.log(item)
    liElementCreator(ulElement410, item)
  } 
}

dataArr.forEach(function(item){
  if(typeof item === 'number' && item * 5 > 350){
    // console.log(item)
    liElementCreator(ulElement410, item)
  }
})

dataArr.map(function(item){
  if(typeof item === 'number' && item * 5 > 350){
    // console.log(item)
    liElementCreator(ulElement410, item)
  }
})


//4.11. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti kiek simbolių jis turi, pvz. "Start has 5 symbols".

for (i = 0; i < dataArr.length; i++){
  let item = dataArr[i]
  if(typeof item === 'string'){
    // console.log(`${item} has a ${item.length} symbols`)
    liElementCreator(ulElement411, `${item} has a ${item.length} symbols`)

  } 
}

dataArr.forEach(function(item){
  if(typeof item === 'string'){
    // console.log(`${item} has a ${item.length} symbols`)
    liElementCreator(ulElement411, `${item} has a ${item.length} symbols`)
  }
})

dataArr.map(function(item){
  if(typeof item === 'string'){
    // console.log(`${item} has a ${item.length} symbols`)
    liElementCreator(ulElement411, `${item} has a ${item.length} symbols`)
  }
})


// 4.12. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio raidę išskiriant brūkšniu ir paverčiant ją didžiąja raide, pvz.: "S-T-A-R-T".

for (i = 0; i < dataArr.length; i++){
  let item = dataArr[i]
  if(typeof item === 'string'){
    // console.log(item.toUpperCase().split('').join('-'))
    liElementCreator(ulElement412, item.toUpperCase().split('').join('-'))
  } 
}

dataArr.forEach(function(item){
  if(typeof item === 'string'){
    // console.log(item.toUpperCase().split('').join('-'))
    liElementCreator(ulElement412, item.toUpperCase().split('').join('-'))
  } 
})

dataArr.map(function(item){
  if(typeof item === 'string'){
    // console.log(item.toUpperCase().split('').join('-'))
    liElementCreator(ulElement412, item.toUpperCase().split('').join('-'))
  } 
})

//4.13. Tik tekstą (string tipo duomenis), tačiau kiekviena žodžio pirmą ir trečią raidę pakeičiant brūkšniu (underscore), pvz.: "_t_rt";

for (let i = 0; i < dataArr.length; i++) {
  let item = dataArr[i];

  // Patikriname, ar item yra tekstas (string)
  if (typeof item === 'string') {
    let splited = item.split('');

    if (splited.length >= 1) {
      splited[0] = '_';
      splited[2] = '_';
    }
    let convertedText = splited.join('');
    // console.log(convertedText);
    liElementCreator(ulElement413, convertedText)
  }
}
dataArr.forEach

// 4.14. Tik tekstą (string tipo duomenis), tačiau žodį parašant atvirkščiai, pvz.: vietoje "start" parašyti "trats";

for (i = 0; i < dataArr.length; i++){
  let item = dataArr[i]
  if(typeof item === 'string'){
    // console.log(item.split('').reverse().join(''))
    liElementCreator(ulElement414, item.split('').reverse().join(''))
  } 
}

dataArr.forEach(function(item){
  if(typeof item === 'string'){
    // console.log(item.split('').reverse().join(''))
    liElementCreator(ulElement414, item.split('').reverse().join(''))
  } 
})

dataArr.map(function(item){
  if(typeof item === 'string'){
    // console.log(item.split('').reverse().join(''))
    liElementCreator(ulElement414, item.split('').reverse().join(''))
  } 
})


// 4.15. Tik tekstą (string tipo duomenis) ir prie kiekvieno teksto parašyti tarp kokių narių masyve jis yra, pvz.: "Word obuolys is between -5564 and -51 in the array".

let lastTask = (array) => {
  for (let i = 0; i < array.length; i++) {
    let narys = array[i];
    let priesNari = array[i - 1];
    let poNario = array[i + 1];
    let end = array[array.length - 1];
    let output = "";
    
    if (typeof narys === 'string') {
      output = `Word ${narys} is between ${priesNari} and ${poNario} in the array`;
    } 
    else if (narys === end) {
      output = `Before word ${narys} is ${priesNari}`;
    } else if (narys === array[0]) {
      output = `After word ${narys} is ${poNario}`;
    }
    
    // console.log(output);
    liElementCreator(ulElement415, output)
  }
}
lastTask(dataArr);



function addTitleToList(ulElement, title) {
  let hElement = document.createElement('h2')
  hElement.textContent = title
  ulElement.appendChild(hElement)
}

function liElementCreator(ulElement, item){
  let liElement = document.createElement('li')
  liElement.textContent = item
  ulElement.appendChild(liElement)
}

