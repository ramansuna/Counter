// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e){ // e = Event Object
        const styles = e.currentTarget.classList; // currentTarget = Objekt den man gerade benutzt im Frontend; Classlist = Alle Klassen, die verfügbar sind
        if (styles.contains("decrease")){
            count--;
        }
        else if (styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if (count > 0){
            value.style.color = "green";
        }
        if (count < 0){
            value.style.color = "red";
        }
        if (count === 0)
            value.style.color = "blue"
        value.textContent = count; // textContent = Manipulieren von Wert (Replace) für value durch count
    })
});