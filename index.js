
class Quiz {
    constructor(question, answer, results)
    {
    this.question = question;
    this.answer = answer;
    this.results = results;
    }

    printProps()
    {
        console.log(this.question);
        console.log(this.answer);
        console.log(this.results);
    }
}

let myFirstQuestion = new Quiz("What will make coding easier?", "Study Groups", "Correct");
console.log(Quiz);


myFirstQuestion.printProps();

let mySecondQuestion = new Quiz("")