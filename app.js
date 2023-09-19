const prompt = require("prompt-sync")();

let wins = 0;
let loses = 0;
let ties = 0;


while (true) {
    const playerChoise = prompt("Tas mı ? Kagit mı ? Makas mı? Seçiniz. Çıkmak için 'q' ya basın.");
    if (playerChoise.toLowerCase() === "q") {
        break;
    }
    if (
        playerChoise !== "tas" &&
        playerChoise !== "kagit" &&
        playerChoise !== "makas"
    ) {
        console.log("Lütfen tas, kagit yada makası seçiniz.");
        continue;
    }

    const choises = ["tas", "kagit", "makas"];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoise = choises[randomIndex];
    console.log("Rakip", computerChoise, "seçti.");

    if (computerChoise === playerChoise) {
        console.log("draw");
        ties++;
    } else if (
        (playerChoise === "tas" && computerChoise === "makas") ||
        (playerChoise === "kagit" && computerChoise === "tas") ||
        (playerChoise === "makas" && computerChoise === "kagit")
    ) {
        console.log("Kazandınız.");
        wins++;
    } else {
        console.log("Kaybettiniz.");
        loses++;
    }

}

console.log("Kazandığın", wins, "Kaybettiğin", loses, "Berabere kaldğın", ties);





