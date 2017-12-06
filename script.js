var myCanvas =  document.getElementById("my-canvas");
var ctx = myCanvas.getContext("2d");

//загальна кількість пропущених уроків
var missingClasses = 76;
//кількість пропущених уроків з поважної причини
var reasonableMissing = 52;
//проценти діаграми
var p1=53, p2=23

var perNumb1 = 0;
var perNumb2 = 25;
var perNumb3 = 50;
var perNumb4 = 75;
    
var pi = Math.PI;
var sector = 2*pi/100;

drawDiagram(p1, p2, missingClasses, reasonableMissing);

function drawDiagram(a1, a2, a3, a4) {
//перевернення координат для діаграми
ctx.save();
ctx.beginPath();
ctx.translate(0, 340);
ctx.rotate(270 * Math.PI / 180);
//перша
ctx.beginPath();
ctx.lineWidth = 30;
ctx.strokeStyle="#c44741";
ctx.arc(170, 170, 129, 0, a1*sector,false);
ctx.stroke();
//друга дуга
ctx.beginPath();
ctx.strokeStyle = "#52616d";
ctx.arc(170, 170, 129, a1*sector, (a1+a2)*sector,false);
ctx.stroke();
//третя дуга
ctx.beginPath();
ctx.strokeStyle = "#eee";
ctx.arc(170,170 ,129, (a1+a2)*sector, 2*pi,false);
ctx.stroke();

ctx.restore();
//малюємо по боках діаграми одиниці вимірювання (0-75)
ctx.fillStyle="#000";
ctx.font = '16px Arial';
ctx.fillText(perNumb1,167,20);
ctx.fillText(perNumb2,320,175);
ctx.fillText(perNumb3,162, 335);
ctx.fillText(perNumb4, 2, 175);

//виводимо дані посеред діаграми
ctx.beginPath();
ctx.font = '16px Arial';
ctx.fillText("Всего прогуляно",110, 120);

ctx.font = '33px Arial';
ctx.fillText(a3, 152, 160);

ctx.font = '14px Arial';
ctx.fillText("Из них по", 142, 200);
ctx.fillText("уважительной причине", 95, 220);

ctx.font = '24px Arial';
ctx.fillText(a4, 160, 250);
};


