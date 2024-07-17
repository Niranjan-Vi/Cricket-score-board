
let team1 = document.getElementById('team1');
let team2 = document.getElementById('team2');
let over = document.getElementById('over');
let run = document.querySelectorAll('.score-button');
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let t_runs = document.getElementById('t_runs');
let t_wickets = document.getElementById('t_wickets');
let all_out = document.getElementById('head');

// Variables 
let value=true;
let wickets = 0;
let over_count = 0;
let runs = [];
let count = 0;
let first_player = "";
let second_player = "";
// Admin operations

update = document.getElementById('update');
update.addEventListener('click', () => {
    
    wickets = 0;
    over_count = 0;
    runs = [];
    count = 0;
    over.value =count;
    t_runs.value=0;
    t_wickets.value=0 ;
   wicker_disable(button);
    all_out.innerHTML="Select Team";
    

});

run.forEach(button => {
    button.addEventListener('click', () => {
        scorecalculation(button);
        if (count == 6) {
            console.log("over completed");
            over_count++;
            over.value = over_count + "." + count;
            count = 0;

        }
        wicker_disable(button);

    });

});

function scorecalculation(button) {
    // console.log(button.innerHTML);
    if (button.innerHTML == 'W') {
        console.log("wicket");
        runs.push(0);
        wickets++;
        t_wickets.value = wickets + "/10";
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

    runcount();

}

function runcount() {
    let sum = 0;
    for (let i = 0; i < runs.length; i++) {
        sum += runs[i];
    }
    t_runs.value = sum;
    console.log("total run is" + sum);
}
function wicker_disable(button){
    if (wickets == 10 || !value) {
        all_out.innerHTML = "All OUT";
        button.disabled = value;

    }
    else{
        button.disabled = !value;
    }
}