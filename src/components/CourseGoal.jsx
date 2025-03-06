export default function CourseGoal({title = 'Java', description = 'fazer algoritmos incriveis'}){
    return <div>
        <h5>O título do curso é {title}</h5>
        <p>E fala sobre{description}</p>
    </div>
}