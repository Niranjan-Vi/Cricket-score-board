
let team1 = document.getElementById('team1');
let team2 = document.getElementById('team2');
let over = document.getElementById('over');
let run = document.querySelectorAll('.score-button');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
// Variables 


let over_count = 0;
let runs = [];
let count = 0;
let first_player = "";
let second_player = "";
// Admin operations

update = document.getElementById('update');
update.addEventListener('click', () => {
    add();
    player_details();
});
function add() {
    console.log(team1.value);
    console.log(team2.value);
    console.log(over.value);
}
run.forEach(button => {
    button.addEventListener('click', () => {
        scorecalculation(button);
        if (count == 6) {
            console.log("over completed");
            over_count++;
            over.value = over_count + "." + count;
            count = 0;

        }

    });

});

function scorecalculation(button) {
    // console.log(button.innerHTML);
    if (button.innerHTML == 'W') {
        console.log("wicket");
        runs.push(0);
        count++;

    }
    else if (button.innerHTML == 'WD') {
        // s = parseInt(button.innerHTML);
        runs.push(1);
    }
    else if (button.innerHTML != 'WD') {
        s = parseInt(button.innerHTML);
        runs.push(s);
        count++;
        let count1 = count;
        over.value = over_count + "." + count;
    }
    //ball count
    if (runs[runs.length - 1] <= 3 ) {
        if (button.innerHTML == 'W') {
            if (player1.style.color = "red") {
                console.log("player1 got out");
                player1.value = " ";
            }
            else {
                console.log("player2 got out");
                player2.value = " ";
            }
        }
        else if (!(count % 2 == 0)) {
            player2.style.backgroundColor = "transparent";
            player1.style.backgroundColor = "red";

        } else {
            player2.style.backgroundColor = "red";
            player1.style.backgroundColor = "transparent";

        }
    }

    runcount();

}

function runcount() {
    let sum = 0;
    for (let i = 0; i < runs.length; i++) {
        sum += runs[i];
    }

    console.log("total run is" + sum);
}
function player_details() {
    player1.value;
    player2.value;
}