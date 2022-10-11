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

    handleChange=(e)=>{

        this.setState({
            currTask:e.target.value
        })

    }

    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{
                task:this.state.currTask,
                id:this.state.tasks.length+1
            }],
            currTask:""
        })
    }
    handleDelete=(id)=>{

        let narr=this.state.tasks.filter((obj)=>{return obj.id!==id})
        this.setState({
            tasks: [...narr]
        });

        
    

    }
    render() {
        return (
            <div>
            <input type="text" name="" value={this.state.currTask} onChange={this.handleChange} />
            <button type="submit" onClick={this.handleSubmit} > Submit </button>
            <ul>
            {
                this.state.tasks.map(obj=>(
                    <li key={obj.id} >
                        <p>{obj.task}</p>
                        <button onClick={()=>this.handleDelete(obj.id)}>Delete</button>
                    </li>
                ))
            }
            </ul>
            </div>
            )
    }
}