
// Recupera userScore dal localStorage
const userScore = localStorage.getItem('userScore') || 0;

// Recupera quantitySelected dal localStorage
const quantitySelected = localStorage.getItem('quantitySelected') || 0;

const risposteCorrette = userScore;

const risposteSbagliate = quantitySelected - risposteCorrette;

console.log(risposteCorrette)

/* creo il grafico */

const ctx = document.getElementById('my-chart');



const data = {
    labels: [
        'incorrect answers',
        'correct answers'],
    datasets: [{
        label: 'Answers',
        data: [risposteSbagliate, risposteCorrette],
        backgroundColor: [
            'rgb(245, 48, 48234)',
            'rgb(48, 198, 224)',
        ],
        borderWidth: 0,
        hoverOffset: 4
    }],
}

const config = {
    type: 'doughnut',
    data: data,
    options: {
        cutout: '70%',
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        }
    }
}

const myChart = new Chart(ctx, config);

/* trasformo il risultato in percentuale */

const rate = function (correct, incorrect) {
    const correctRate = (correct / quantitySelected) * 100
    const incorrectRate = (incorrect / quantitySelected) * 100

    return { correctRate: correctRate, incorrectRate: incorrectRate }
}

const Result = rate(risposteCorrette, risposteSbagliate)

console.log(Result)


if (Result.correctRate >= 60) {
    launchConfetti()
}
/* Inserisco i risultati all'interno del mio DOM in percentuale */

const rateDOM = function (Risposte) {
    const correct = document.querySelector('#correctDiv .correct-content')
    correct.innerHTML = `
    <h1>Correct</h1>
    <strong><span id="perc-result">${Result.correctRate}</span>%</strong>
    <h6 class="result-questions"><span id="span-result">${risposteCorrette}</span> / ${quantitySelected} questions</h6>`

    const incorrect = document.querySelector('#wrongDiv .wrong-content')
    incorrect.innerHTML = `
    <h1>Wrong</h1>
    <strong><span id="perc-result">${Result.incorrectRate}</span>%</strong>
    <h6 class="result-questions"><span id="span-result">${risposteSbagliate}</span> / ${quantitySelected} questions</h6>`

}

rateDOM(Result)


const textResult = function () {
    const innerDiv = document.querySelector('#inner-chart')
    if (risposteCorrette > risposteSbagliate) {
        innerDiv.innerHTML = `
    <p class="title-chart">Congratulations!</p>
          <p class="blue">You passed the exam</p>
          <br>
          <p class="description-result">We'll send you the certificate <br>in few minutes. <br>Check you email (including <br>promotions / spam folder)</p>
    `
    } else if (risposteCorrette < risposteSbagliate) {
        innerDiv.innerHTML = `
    <p class="title-chart">Oh crap!</p>
          <p class="blue">You better go play minecraft</p>
          <br>
          <p class="description-result">We'll send you the minecraft server <br>in few minutes. <br>Check you email</p>
    `
    } else if (risposteCorrette === risposteSbagliate) {
        innerDiv.innerHTML = `
    <p class="title-chart">Oh crap!</p>
          <p class="blue">you almost did!!!</p>
          <br>
          <p class="description-result">We'll send you some alcohol for your depression post exam<br>in few minutes. <br>Check you email</p>
    `
    }

}

textResult()




/* funzioni da utilizzare */


function nextPage() {
    window.location.href = './feedback.html';
}



function launchConfetti() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;
    const colors = ['#00ffff', '#d20094'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
