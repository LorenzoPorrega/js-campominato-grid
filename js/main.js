'use strict'

/*Consegna:
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con “facile”=> 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con “medio” => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con “difficile” => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;*/

//Here I establish useful variables for addEventListeners and to print in HTML
const playButton = document.querySelector(".btn");
const select = document.querySelector(".form-select");
const container = document.querySelector(".block-container");


//Here I establish an addEventListener for when to user click the play button
playButton.addEventListener("click", function(){
    //Here I grab the user selected difficulty and console-print it
    let difficulty = parseInt(select.value);
    let blockContainer = container;
    console.log(difficulty);

    /*Here I establish an if block to print the grid if the user selects a valid
    difficulty, otherwise I give the grid a d-none class to hide it, indipendently
    from the fact that it has or not already been generated before*/
    console.log(select.value);
    if(select.value != "Scegli la difficoltà..."){
        blockContainer.classList.replace("d-none", "d-flex");
        blockContainer.innerHTML = "";
    }
    else{
        blockContainer.classList.replace("d-flex", "d-none");
    }

    /*Here I establish a for cycle to generate as many blocks in the grid as the
    difficulty selected by the user: "Facile" =  49 blocks, "Media" = 81 blocks, 
    "Difficile" = 100 blocks. I start the for cycle from i = 1 so that when I
    print the i as a number inside the block I don't get a "0" starting block.
    The width of each block is established by a square mathematical operation
    on the difficulty: the block width is 100% of the grid container divided by
    square of difficulty*/
    for (let i = 1; i <= difficulty; i++){
        let block = document.createElement("div");
        block.classList.add("block", "d-flex", "align-items-center", "justify-content-center", "text-white");
        block.style.flexBasis = `calc(100% / ${Math.sqrt(difficulty)})`;
        blockContainer.append(block);
        
        /*This add event listener listens for a click on the each block and for each
        click on that block turns the block background color to BS's success (green)
        and prints inside it's number in order from left to right, top to bottom*/
        block.addEventListener("click", function(){
            block.classList.add("bg-success");
            block.innerHTML= (i);
        });
    }
});