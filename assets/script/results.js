
const risposteCorrette = 5;
const risposteSbagliate = 10 - risposteCorrette;

const ctx = document.getElementById('my-chart');



const data = {
    labels: [
        'incorrect answers',
        'correct answers'],
    datasets: [{
        label: 'Answers',
        data: [risposteCorrette, risposteSbagliate],
        backgroundColor: [
            'rgb(245, 48, 48)',
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

new Chart(ctx, config);




const rate = function (correct, incorrect) {
    const correctRate = (correct / 10) * 100
    const incorrectRate = (incorrect / 10) * 100

    return { correctRate: correctRate, incorrectRate: incorrectRate }
}

const Result = rate(risposteCorrette, risposteSbagliate)

console.log(Result)




const rateDOM = function (Result) {
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



