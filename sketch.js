let posicoes = [];
let wallyIndex;
let mensagem = "";
function setup() {
createCanvas(800, 600);
textSize(32);
textAlign(CENTER, CENTER);
// Gerar posições aleatórias para os emojis
for (let i = 0; i < 50; i++) {
posicoes.push({
x: random(50, width - 50),
y: random(100, height - 50),
});
}
// Escolher aleatoriamente um dos emojis como Wally
wallyIndex = floor(random(posicoes.length));
}
function draw() {
background("#BE65CE");
// Título
fill(0);
textSize(28);
text("Ache o Trevo! (🍀)", width / 2, 40);
// Desenha os emojis
for (let i = 0; i < posicoes.length; i++) {
if (i === wallyIndex) {
text("🍀", posicoes[i].x, posicoes[i].y);
} else {
text("☘️", posicoes[i].x, posicoes[i].y);
}
}
// Mostra a mensagem de acerto ou erro
if (mensagem !== "") {
fill("#E91E63");
textSize(36);
text(mensagem, width / 2, height - 50);

}
}
function mousePressed() {
// Verifica em qual emoji foi clicado
for (let i = 0; i < posicoes.length; i++) {
let px = posicoes[i].x;
let py = posicoes[i].y;
let d = dist(mouseX, mouseY, px, py);
if (d < 20) {
if (i === wallyIndex) {
mensagem = "🎉 Você encontrou o trevo!";
noLoop(); // opcional: parar o jogo após acerto
} else {
mensagem = "❌ Ops! Acho que esse não é o trevo!.";
}
break;
}
}
}