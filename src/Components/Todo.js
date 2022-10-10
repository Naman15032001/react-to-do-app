import React, {
    Component
} from 'react'

export default class Todo extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [{
                task: "Check Mails",
                id: 1
            }, {
                task: "Read Article",
                id: 2
            }, {

                task: "Complete Homework",
                id: 3

            }],
            currTask: ""

        }
    }
    render() {
        return (
            <div>
            <input type="text" name=""/>
            <button type="submit" > Submit </button>
            {
                this.state.tasks.map(obj=>(
                    <div key={obj.id}>
                        <p>{obj.task}</p>

                    </div>
                ))
            }
            </div>
            )
    }
}