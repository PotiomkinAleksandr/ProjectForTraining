"use strict";


//     let el = document.getElementById(id);


// function getEl(id) {
//     console.log("тестовый текст");
//     let el = document.getElementById(id);
//     return el;
// }

// let peremennaya1 = "testoviy id";
// let peremennaya2 = getEl(peremennaya1);



let perfornumber = "testoviy id Phone number";
let perfornumber2 = document.getElementById(perfornumber);
let perforEmail2 = "testoviy id Email";
let perforEmail = document.getElementById(perforEmail2);
let selectid = "cities id";
var varselect2 = document.getElementById(selectid);
var meetingId = "gotothemeeting";
var meetingEl = document.getElementById(meetingId);
var navalnyId = "id img Navalniy";
var navalnyEl = document.getElementById(navalnyId);


// // debugger;
// function consoleLogValue () {
//     console.log (peremennaya2.value);
//     console.log (perforEmail.value);
//     console.log (varselect2.value);
// }

// consoleLogValue ();
// consoleLogValue ();
// consoleLogValue ();

function alertClassAndValue(variable1) {
    alert (variable1.value);
    alert (variable1.className);
}

// alertClassAndValue (peremennaya2);  
// alertClassAndValue (perfornumber2);
// alertClassAndValue (perforEmail);
// alertClassAndValue (varselect2);
// alertClassAndValue (meetingEl);

// console.log (peremennaya2.value);
// console.log (perfornumber2.value);
// console.log (perforEmail.value);
// console.log (varselect2.value);
// console.log (meetingEl.innerHTML);
// console.log (navalnyEl.alt);


// alert(1+2+3);


// let name = "Агент Госдепа";
// alert(name);


// let namy = "это Навальный";
// alert (`Привет, ${namy}`);


let var1 = "testoviy id";
let var2 = document.getElementById(var1);
var2.setAttribute('value', 'Name');


// let nameId = "testoviy id";
// let nameEl = document.getElementById(nameId);
// alert (nameEl.value);


// function getValueName(id) {
//     let per1 = document.getElementById(id);
//     return per1.value
// }

// let idValueName = "testoviy id";
// let valueName = getValueName(idValueName);

// alert (valueName);



// function getClassName(id) {
//     let per1 = document.getElementById(id);
//     return per1.className
// }

// let idValueName = "testoviy id";
// let ClassNamedsa = getClassName(idValueName);

// alert (ClassNamedsa);                                   //alert называется "модальное окно". Понятие модальное означает, что пользователь не может взаимодействовать с интерфейсом остальной части страницы, нажимать на другие кнопки и т.д. до тех пор, пока взаимодействует с окном. В данном случае – пока не будет нажата кнопка «OK».





//let numberMeetings = prompt("Сколько раз был на митингах?", 0); //Второй параметр (0) является необязательным, но если не указать его, то Internet Explorer вставит строку "undefined" в поле для ввода. Чтобы prompt хорошо выглядел в IE, рекомендуется всегда указывать второй параметр. ("Сколько раз был на митингах?", ""); <-- для IE

//alert(`Ты был на митингах ${numberMeetings} раз!`); 


// let sdfsd= confirm("Ты был когда-нибудь на митингах?"); 
// alert(sdfsd); 

// let varname = prompt("Как тебя зовут?","");
// alert(`Тебя зовут ${varname}!`);


// let cat = 2345;

// if (typeof cat === "undefined") {
//     alert("Переменная НЕ определена");
// } else {
//     alert("Переменная определена");
// }


// МАССИВЫ

// let kuko = ["Как?", "Зачем?", "Почему?"];

// prompt(kuko[0]);
// prompt(kuko[1]);
// prompt(kuko[2]);


// let kuki = [];

// kuki[0] = prompt("Чё?", "");
// kuki[1] = prompt("Каво?", "");
// kuki[2] = prompt("Ты чё?", "");

//console.log(5 + +"6"); //унарный плюс. Меняет тип данных. Преобразует не числа в числа (это тоже самое, что и Number(...) только короче)(Унарным называется оператор, который применяется к одному операнду(аргументу). 2+2 вот здесь плюс БИНАРНЫЙ. то есть применяется к двум операндам)


let per1 = 10,
    per2 = 20;

   
//per1++;     //оператор "инкремент". Прибавляет единицу
//per2--;     //оператор "декремент". Отнимает единицу

//console.log(per1++); //постфиксная форма (сначала возвращает старое значение. А только потом прибавляет. Поэтому не получилось)
//console.log(per2--); //постфиксная форма

//console.log(++per1); //префиксная форма
//console.log(--per2); //префиксная форма


//console.log(20%9); //% возвращает остаток от деления двух чисел. То есть 2.


// = присваивание
// == нестрогое сравнение
// === строгое сравнение

//console.log(4/2 == 2); //true
//console.log(4/2 == "2"); //true
//console.log(4/2 === "2"); //false сравнивает в том числе и по типу данных




// "&&" - оператор "и". Работает только если оба значения правдивые

const korova = true,
      giraf = true; 

  
// "||" - оператор "или". Работает если хотя бы одно значение правдивое.

// "!" - оператор отрицания

// "!=" - НЕ равно. "!==" - строгое НЕ равно

console.log(korova != giraf);





    





