const TaskItem = ({task}) => {
    return (
        <tr>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td><a href={task.url} target="_blank">{task.url}</a></td>
        </tr>
    )
}

const TaskList = ({tasks}) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Задача</td>
                    <td>URL</td>
                </tr>
            </thead>
            <tbody>
            {tasks.map((task) => <TaskItem task={task} />)}
            </tbody>
        </table>
    )
}

export default TaskList;