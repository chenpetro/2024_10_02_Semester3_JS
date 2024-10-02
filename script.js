// const numbers = [1,2,3,4,5]
// console.log(numbers[Math.floor(Math.random()*5)]);
// const names = ['Petro','Marko','Nadiia','Kristi','Marichka']
// console.log(names[3])
// console.log(names.length)
// const users = 20
// if (users > names.length) {
//     alert('You are 21 AND too late')
// }
// else {
//     alert('You are IN TIME')

// }
// for (let index = 0; index < names.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 0; i < names.length; i++) {
//     console.log(`${i+1} - ${names[i]}`);
// }

// const numbersUniq = [1,2,3,4,5,6,7,8,9,10]
// for (let index = 0; index < numbersUniq.length; index++) {
//     let result = numbersUniq[index]*7
//     console.log(`${numbersUniq[index]} * 7 = ${result}`);

//     let cost;
// const subscription = 'premium';
// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;
//   case 'pro':
//     cost = 100;
//     break;
//   case 'premium':
//     cost = 500;
//     break;
//   default:
//     console.log('Invalid subscription type');
// }
// console.log(cost); // 500

// let number = Number(prompt('Enter your number'));

// if (number < 55 || number > 55) {
//   console.log('Number is out of range');
// } else {
//   console.log('Your number is in the range');
// }

// const age = 55
// const ageOne = 'kids'
// const ageTwo = 'adults'
// const ageThree = 'retired'
// if (age >= 0 && age <= 16) {
// alert (ageOne)}
// else if (age >= 17 && age <= 60) {
// alert (ageTwo)}
// else if (age >= 61 && age <= 100) {
// alert (ageThree)} 

// const yourName = String(prompt('Enter your name'))
// const yourSurname = String(prompt('Enter your name'))

// if (yourName.length>4 && yourSurname.length>5){
// alert(yourName.length + yourSurname.length)
// }
// else{
// alert('Upsssss')

// }


// const num=Number([Math.floor(Math.random()*5+1)])
// console.log(num);
// if (num==1){
//     alert(`Random number is 1`)
// } 
// else if (num==2){
//     alert(`Random number is 2`)
// } 
// else if (num==3){
//     alert(`Random number is 3`)
// } 
// else if (num==4){
//     alert(`Random number is 4`)
// } 
// else {
//     alert(`Random number is 5`)
// } 


let lang = String(prompt('Write your language: en de ua fr'))
switch (lang) {
    case 'en':
        lang = 'You selected English';
        break;
    case 'de':
        lang = 'You selected Deutsch';
        break;
    case 'ua':
        lang = 'You selected Ukrainian';
        break;
    case 'fr':
        lang = 'You selected French';
        break;
    default:
        console.log('Invalid subscription type');
    }
    console.log(lang);