
let team1 = document.getElementById('team1');
let team2 = document.getElementById('team2');
let over = document.getElementById('over');
let run = document.querySelectorAll('.score-button');
          
let runs = [];
let count=0;
// Admin operations

update = document.getElementById('update');
update.addEventListener('click', () => {
    add();
});
function add() {
    console.log(team1.value);
    console.log(team2.value);
    console.log(over.value);
}
run.forEach(button => {
    button.addEventListener('click', () => {
        scorecalculation(button);
        if(count==6){
            console.log("over completed");

            
        }
        
    });

});

function scorecalculation(button) {
    console.log(button.innerHTML);
    if (button.innerHTML == "W") {
        runs.push(0);
        count++;
    }
    if (button.innerHTML == 'WD') {
        // s = parseInt(button.innerHTML);
        runs.push(1);
    }
    if (button.innerHTML != 'WD') {
        s = parseInt(button.innerHTML);
        runs.push(s);
        count++;
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