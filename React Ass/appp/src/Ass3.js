//Assignment 3 : rendering list (todo list)

const toDoList = [
    {
        id: 'T1',
        task: 'Assignment completion'
    },
    {
        id: 'T2',
        task: 'Calligraphy work'
    },
    {
        id: 'T3',
        task: 'problem solving - cryptography'
    },

];

export default function Display(){
    const tasks = toDoList.map(task => <li> {task.id} - {task.task}</li>); //rendering the task 
    return(
        <div>
          <h3>Assignment 3 : </h3>
        <h2>Todo List </h2>    
        <ul type="none">{tasks}</ul>
        <p>---------------------------</p><br />

        </div>
    );
}

