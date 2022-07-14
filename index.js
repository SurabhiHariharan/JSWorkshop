const data = require('./data')

const transformStudent = (student) =>{
    const {english, social, science} = student.marks
    return `${student.id}, ${student.name}, English: ${english}, Social: ${social}, Science: ${science}`
}

const logResult = (result) => {
    console.log(result)
}

const main = () => {
       data.map(transformStudent).map(logResult)
    }

main()
