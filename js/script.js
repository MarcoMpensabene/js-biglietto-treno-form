// > Descrizione:
// >  Scrivere un programma che chieda all’utente:

// > Il numero di chilometri da percorrere
// > Età del passeggero , Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// > il prezzo del biglietto è definito in base ai km (0.267113 € al km)
// > va applicato uno sconto del 24.552% per gli under 21
// > va applicato uno sconto del 37.893% per gli over 63.
// > MILESTONE 1:
// > Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
// > La risposta finale (o output) sarà anch’essa da scrivere in console.MILESTONE 2:
// > Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// > Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).



const userAgeEl = document.querySelector("input#userAge");
const userKmEl = document.querySelector("input#userKm");


let buttonEl = document.querySelector("button");

buttonEl.addEventListener("click" , 

    function() {
        const userKm = Number.parseFloat(userKmEl.value , 10);
        const userAge =  Number.parseInt(userAgeEl.value , 10);

        const priceForKm = 0.267113
        let discount = 0;

        if (userAge >= 63){
            discount = 37.893;
        } else if (userAge <= 21){
            discount = 24.552;
        }
        
        let finalDiscount = (priceForKm * userKm) / 100 * discount;
        let finalPrice = (priceForKm * userKm) - finalDiscount;
        
        console.log(finalPrice.toFixed(2));
}
);
    