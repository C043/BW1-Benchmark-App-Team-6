
// Recupera userScore dal localStorage
const userScore = localStorage.getItem('userScore') || 0;

const risposteCorrette = userScore;

const risposteSbagliate = 10 - risposteCorrette;

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
    const correctRate = (correct / 10) * 100
    const incorrectRate = (incorrect / 10) * 100

    return { correctRate: correctRate, incorrectRate: incorrectRate }
}

const Result = rate(risposteCorrette, risposteSbagliate)

console.log(Result)


/* Inserisco i risultati all'interno del mio DOM in percentuale */

const rateDOM = function (Risposte) {
    const correct = document.querySelector('#correctDiv .correct-content')
    correct.innerHTML = `
    <h1>Correct</h1>
    <strong><span id="perc-result">${Result.correctRate}</span>%</strong>
    <h6 class="result-questions"><span id="span-result">${Result.correctRate / 10}</span> / 10 questions</h6>`

    const incorrect = document.querySelector('#wrongDiv .wrong-content')
    incorrect.innerHTML = `
    <h1>Wrong</h1>
    <strong><span id="perc-result">${Result.incorrectRate}</span>%</strong>
    <h6 class="result-questions"><span id="span-result">${Result.incorrectRate / 10}</span> / 10 questions</h6>`

}

rateDOM(Result)


const textResult = function () {
    const innerDiv = document.querySelector('#inner-chart')
    if (risposteCorrette >= 6) {
        innerDiv.innerHTML = `
    <p class="title-chart">Congratulations!</p>
          <p class="blue">You passed the exam</p>
          <br>
          <p class="description-result">We'll send you the certificate <br>in few minutes. <br>Check you email (including <br>promotions / spam folder)</p>
    `
    } else {
        innerDiv.innerHTML = `
    <p class="title-chart">Oh crap!</p>
          <p class="blue">You better go play minecraft</p>
          <br>
          <p class="description-result">We'll send you the minecraft server <br>in few minutes. <br>Check you email</p>
    `
    }

}

textResult()


function nextPage () {
    window.location.href = './feedback.html';
}

