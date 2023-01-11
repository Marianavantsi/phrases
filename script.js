
const getIdeaOne =  document.getElementById ("btn-solution");
const getIdeaTwo =  document.getElementById ("btn-resolution"); 
const phrases = [ 
    "Звучить чудово!",
    "Однозначно потрібно це зробити!",
     "Я не впевнений, що це гарна ідея!",
     "Можливо не завтра!",
     "Всесвітня мережа не знає, що тобі порадити з цим:(",
     "Подумай ще завтра про це!"
    ];
    

document.getElementById ("btn-solution").addEventListener ("click", function(){
     getIdeaOne.disabled = true;
     getIdeaTwo.disabled = false;
     alert ("Подумай про питання, на яке хочеш отримати відповідь і натисни ОК")
     alert (phrases[Math.floor(Math.random()*6)])
 });


document.getElementById ("btn-resolution").addEventListener ("click", function(){
     getIdeaOne.disabled = false;
     getIdeaTwo.disabled = true;
    alert ("Подумай про питання, на яке хочеш отримати відповідь і натисни ОК")
    alert (phrases[Math.floor(Math.random()*6)])
});

