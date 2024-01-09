document.addEventListener("DOMContentLoaded", function() {
    //topic buttons
    const technologyBtn= document.getElementById("technologyBtn");
    const clothesBtn= document.getElementById("clothesBtn");
    const animalsBtn= document.getElementById("animalsBtn");
    const foodBtn= document.getElementById("foodBtn");
    const homeBtn= document.getElementById("homeBtn");

    //pages
    const topic= document.getElementById("topic");
    const main= document.getElementById("main");

    //lists
    const technologyList= ["COMPUTER", "PRINTER", "CALCULATOR", "LAPTOP", "SMARTPHONE", "HEADPHONES", "MOUSE", "KEYBOARD", "MICROPHONE", "ROUTER"];
    const clothesList= ["JEANS", "SHIRT", "SOCKS", "JACKET", "SCARF", "SHOES", "DRESS", "COAT", "SUIT", "SKIRT"];
    const animalsList= ["DOG", "CAT", "LION", "GIRAFFE", "RABBIT", "LEOPARD", "SNAKE", "MONKEY", "CHICKEN", "HORSE"];
    const foodList= ["BREAD", "RICE", "POTATO", "TOMATO", "APPLE", "SALAD", "MEAT", "EGG", "PASTA", "PIZZA"];
    const homeList= ["LAMP", "FRIDGE", "SOFA", "PLATE", "DESK", "TOILET", "SINK", "GARDEN", "DOOR"];

    //Input
    const letterInput= document.getElementById("letterInput"); 

    //Result
    const result= document.getElementById("result");
    const resultBtn= document.getElementById("resultBtn");
    const resultWord= document.getElementById("resultWord");

    let word;
    let boxCompleate= [];
    let divs;
    let i=0;


    technologyBtn.addEventListener("click", function() {
        topic.style.display= "none";
        main.style.display= "block";
        word= chooseRandom(technologyList); 
        divs= addBoxes();

    });

    clothesBtn.addEventListener("click", function() {
        topic.style.display= "none";
        main.style.display= "block";
        word= chooseRandom(clothesList);
        divs= addBoxes();
    });

    animalsBtn.addEventListener("click", function() {
        topic.style.display= "none";
        main.style.display= "block";
        word= chooseRandom(animalsList);
        divs= addBoxes();

    });

    foodBtn.addEventListener("click", function() {
        topic.style.display= "none";
        main.style.display= "block";
        word= chooseRandom(foodList);
        divs= addBoxes();
    }); 

    homeBtn.addEventListener("click", function() {
        topic.style.display= "none";
        main.style.display= "block";
        word= chooseRandom(homeList);
        divs= addBoxes();
    });
    
    letterInput.addEventListener("input", checkLetter);

    resultBtn.addEventListener("click", playAgain);

    function chooseRandom(list) {
        const topicIndex= Math.floor(Math.random() * list.length);
        const word= list[topicIndex];
        console.log(word);

        return word;
    }

    function addBoxes() {
        while (guessContainer.firstChild) {
            guessContainer.removeChild(guessContainer.firstChild);
        }

        let divList= [];
        for(let i=0; i < word.length; i++) {
            const guessBox= document.createElement("div");
            guessBox.classList.add("guessBox");
            guessBox.id= "guessBox" + i;
            divList[i]= guessBox;

            const guessBoxContainer= document.createElement("div");
            guessBoxContainer.classList.add("guessBoxContainer");
            


            guessContainer= document.getElementById("guessContainer");
            guessContainer.append(guessBox);

            guessBox.append(guessBoxContainer);

        }
        return divList;
    }


    function playAgain() {
        i=0;
        divs= "";
        letterInput.value = "";

        topic.style.display= "block";
        main.style.display= "none";
        result.style.display= "none"

    }


    function checkLetter() {
        divs[i].style.backgroundColor= "#EF7D31";
        
        if (letterInput.value === word[i] || letterInput.value === word.toLowerCase()[i]) {
            console.log(`letterInput.value = ${letterInput.value} & word[i] = ${word[i]}`);
            console.log("succes!");
            divs[i].textContent= word[i];
            letterInput.value = "";
            i++;

            if (i === word.length) {
                setTimeout(function() {
                    resultWord.textContent= word;
                    result.style.display= "block";
                    main.style.display= "none";
                }, 100);
            
        }
    }

    if(letterInput.value != word[i] && letterInput.value != "") {
        divs[i].style.backgroundColor= "red";
        console.log(`letterInput.value = ${letterInput.value} & word[i] = ${word[i]}`);
        setTimeout(function() {
            divs[i].style.backgroundColor= "#EF7D31";
        }, 200);
        letterInput.value = "";
    }
    }

    


});