import React from 'react';
import axios from 'axios';
import TaskList from './components/TaskList.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentDidMount() {

        console.log(123);

        axios
            .get('http://127.0.0.1:8000/api/task/')
            .then(response => {
                const tasks = response.data;
                this.setState({
                    tasks: tasks
                });
            });
    }

    render() {
        return (
            <div>
                <TaskList tasks={this.state.tasks} />
            </div>
        )
    }
}

export default App;
