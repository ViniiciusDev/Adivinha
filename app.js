alert("Boas Vindas ao jogo de Adininha");
let number = 10
let secretNumber = parseInt(Math.random() * number + 1);
let takeChance;
let shots = 1;

console.log(secretNumber);

while(takeChance != secretNumber)   {
    takeChance = prompt(`Adivinhe o numero de 1 a ${number}`)

    let numberShots = shots == 1 ? "Tentativa" : "Tentativas"; 

    if (takeChance == secretNumber) {
        alert(`O Numero Secreto é ${secretNumber} e você precisou de ${shots} ${numberShots} para conseguir acertar!!`);
        break;
    } else  {
        if (takeChance > secretNumber) {
            alert(`Il numero secreto é minore di ${takeChance}`);
        }   else    {
            alert(`Il numero secreto é maggiore di ${takeChance}`)
        }

        shots++;
    }

    
}