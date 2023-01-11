
const getIdeaOne =  document.getElementById ("btn-solution");
const getIdeaTwo =  document.getElementById ("btn-resolution"); 
const phrases = [ 
    "ЗВУЧИТЬ ЧУДОВО!",
    "ОДНОЗНАЧНО, ПОТРІБНО ЦЕ ЗРОБИТИ",
     "Я НЕ ВПЕВНЕНИЙ, ЩО ЦЕ ГАРНА ІДЕЯ!",
     "МОЖЛИВО НЕ ЗАВТРА!",
     "НАВІТЬ ВСЕСВІТНЯ МЕРЕЖА НЕ ЗНАЄ, ЩО ТОБІ ПОРАДИТИ:(",
     "НЕ ДУМАЙ КРАЩЕ ПРО ЦЕ СЬОГОДНІ!"
    ];
    

document.getElementById ("btn-solution").addEventListener ("click", function(){
     getIdeaOne.disabled = true;
     getIdeaTwo.disabled = false;
     alert ("Подумай про питання, на яке хочеш отримати відповідь! Потім - закрий це повідомлення і уважно прочитай наступне")
     alert (phrases[Math.floor(Math.random()*6)])
 });


document.getElementById ("btn-resolution").addEventListener ("click", function(){
     getIdeaOne.disabled = false;
     getIdeaTwo.disabled = true;
    alert ("Подумай про питання, на яке хочеш отримати відповідь! Потім - закрий це повідомлення і уважно прочитай наступне")
    alert (phrases[Math.floor(Math.random()*6)])
});

