function calculateGrade(questions) {
    const totalCorrect = questions.reduce((correctCount, question) => {
        return correctCount + (question.answer === question.correct ? 1 : 0);
    }, 0);
    return totalCorrect;
}

function correctExam(exam) {
    const correctAnswers = calculateGrade(exam.questions);
    const grade = (correctAnswers / exam.questions.length) * exam.value;
    console.log(`The student ${exam.student} got ${correctAnswers} questions right and scored a grade of ${grade.toFixed(2)}`);
}

const exam = {
    student: "John",
    subject: "English",
    value: 10,
    questions: [
        { answer: "a", correct: "b" },
        { answer: "c", correct: "c" },
        { answer: "e", correct: "b" },
        { answer: "b", correct: "b" },
        { answer: "c", correct: "c" }
    ]
};

// Calling the function with the exam object
correctExam(exam);
