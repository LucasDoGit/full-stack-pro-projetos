import { useState } from 'react'
import './App.css'

function App() {
  const [taskInput, setTaskInput] = useState("")
  const [tasks, setTasks] = useState<string[]>([])
  const [editTask, setEditTask] = useState({
    enabled: false,
    task: ""
  })

  function handleRegister(){
    if(!taskInput){
      alert("Preencha o nome da tarefa")
      return;
    }

    if(editTask.enabled){
      handleSaveEdit();
      return;
    }
    
    setTasks(tarefas => [...tarefas, taskInput])
    setTaskInput("")
  }

  function handleSaveEdit(){
    const findIndexTask = tasks.findIndex(task => task === editTask.task)
    const allTasks = [...tasks];

    allTasks[findIndexTask] = taskInput;
    setTasks(allTasks);

    setEditTask({
      enabled: false,
      task: ""
    })

    setTaskInput("")
  }

  function handleDelete(item: string){
    const removeTask = tasks.filter( task => task !== item)
    
    setTasks(removeTask)
  }

  function handleEdit(item: string){
    setTaskInput(item)
    setEditTask({
      enabled: true,
      task: item
    })
  }

  return (
    <div>
      <h1>Teste</h1>
      <input
        placeholder='Digite o nome da tarefa...'
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value) }
      />
      <button onClick={handleRegister}>
        {editTask.enabled ? "Atualizar tarefa" : "Adicionar tarefa"}
      </button>
      <hr/>

      {tasks.map((task) => (
        <section key={task}>
          <span>{task}</span>
          <button onClick={ () => handleEdit(task) }>Editar</button>
          <button onClick={ () => handleDelete(task) }>Excluir</button>
        </section>
      ))}
    </div>
  )
}

export default App
