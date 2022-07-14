const data = require('./data')

const transformStudent = (student) =>{
    const {english, social, science} = student.marks
    return `${student.id}, ${student.name}, English: ${english}, Social: ${social}, Science: ${science}, Total: ${student.totalMark}`
}

const logResult = (result) => {
    console.log(result)
}

const calculateTotal = (student) =>{
    const marks = student.marks
    total = marks.english + marks.science + marks.social
    student.totalMark = total
    return student
}

const main = () => {
       data
       .map(calculateTotal)
       .map(transformStudent)
       .map(logResult)
    }

main()
