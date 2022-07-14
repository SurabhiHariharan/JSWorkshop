const students = require('./data')
const data = require('./data')

const transformStudent = (student) =>{
    const {english, social, science} = student.marks
    return `${student.id}, ${student.name}, English: ${english}, Social: ${social}, Science: ${science}, Total: ${student.totalMark}, Rank: ${student.rank || 'F'}}`
}

const transformStudents = (students) => {
    return students.map(transformStudent)
}

const displayStudentMarkList = (students) => {
    const transformed = students.map(({marks, ...rest})=> ({...rest, ...marks}))
    console.table(transformed)
}

const calculateTotal = (student) => {
    const marks = Object.values(student.marks)
    const isPassed = marks.every(mark => mark >= 40);
    const totalMark = marks.reduce((mark,value)=> value + mark,0)
    return { ...student, totalMark, isPassed}
}

const getRanks = (students) => {
   const passedStudents = students.filter((student) => student.isPassed)
   const failedStudents = students.filter((student) => !student.isPassed)
   const rankedStudents = passedStudents
    .sort((a,b) => b.total - a.total)
    .map((student, index) => ({...student, rank : index +1}))
    return rankedStudents.concat(failedStudents)

}

const processStudents = (students)  => {
    return students.map(calculateTotal)
}


const main = () => {
    const processedStudents = processStudents(data)
    const rankedStudents = getRanks(processedStudents)
    displayStudentMarkList(rankedStudents)
        
}

main()
