
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

### Esercizio
Tramite un FORM chiediamo all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Andiamo poi a calcolare il prezzo totale del viaggio tenendo conto che il costo al chilometro è di 0.21 € al km 
e che viene applicato uno sconto del 20% per i minorenni o del 40% per gli over 65. 
Stampiamo in console il prezzo finale con 2 cifre decimali.

### Dati
chiedo all'utente il numero di chilometri e la salvo.
chiedo all'utente l'età e la salvo.

### Esecuzione logica
BONUS: Ad ogni richiesta controllo se l'utennte ha inserito dei numeri, se non lo sono ,stampo in console un messaggio appropriato.
Dichiaro variabile per il  prezzo totale.
Dichiaro variabile per il  prezzo Parziale e la calcolo tramite il costo al chilometro.

Dichiaro variabile sconto e la calcolo tramite l'età.
Se l'età è minore di 18 anni calcolo il 20% del prezzo parziale
Se l'età è maggiore di 65 anni calcolo il 40% del prezzo parziale
Altrimenti lo sconto è zero.

Calcolo il prezzo finale sottraendo dal prezzo parziale lo sconto.

### Output
Stampo in console  il prezzo finale