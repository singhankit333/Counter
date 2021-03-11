<<<<<<< HEAD
var countInterval;

function startCounter() {
    
    var number = parseInt(document.getElementById("number").value);
    
    if(isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if(number < 1 || number > 99999) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }
    
    var currentNos = document.querySelectorAll(".counter .current");
    var nextNos = document.querySelectorAll(".counter .next");
    var count = 0;
    
    // If user clicks on 'Start Counter' button again - remove this function and below line if you don't consider this situation
    resetNumbers(currentNos, nextNos, 5);
    
    // Clears the previous interval that was running
    clearInterval(countInterval);
    
    countInterval = setInterval(function() {
        if(count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(currentNos, nextNos, 4);
        count++;
    }, 1000);

}


function resetNumbers(currentNos, nextNos, end) {
    for(var i=0; i<end; ++i) {
        currentNos[i].innerText = 0;
        nextNos[i].innerText = 1;
    }
}



function increaseCount(currentNos, nextNos, index) {
    
    let current = currentNos[index];
    let next = nextNos[index];
    
    if(current.innerText == 9) {
        increaseCount(currentNos, nextNos, index-1);
    }
    
    next.classList.add("animate");
    
    setTimeout(function() {
        current.innerText = next.innerText;
        next.classList.remove("animate");
        next.innerText = parseInt(next.innerText) + 1;
        if(next.innerText > 9) {
            next.innerText = 0;
        }
    }, 500);
    
=======
var countInterval;

function startCounter() {

    var number = parseInt(document.getElementById("number").value);

    if (isNaN(number)) {
        alert("Please enter a number");
        clearInterval(countInterval);   // This is important for the condition when a counter is running and you entered a wrong input for a new counter
        return;
    }
    if (number < 1 || number > 9) {
        alert("Range out of bounds");
        clearInterval(countInterval);
        return;
    }

    var currentNo = document.querySelector("#counter .current");
    var nextNo = document.querySelector("#counter .next");
    var count = 0;

    // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
    resetNumbers(currentNo, nextNo);
    
    // Clears the previous interval that was running
    clearInterval(countInterval);

    countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000);

}


function resetNumbers(currentNo, nextNo) {
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}



function increaseCount(currentNo, nextNo) {

    nextNo.classList.add("animate");

    setTimeout(function () {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }, 500);

>>>>>>> dbfe37b1275fe38a827fe03de13b0ef5cbd0e2c3
}