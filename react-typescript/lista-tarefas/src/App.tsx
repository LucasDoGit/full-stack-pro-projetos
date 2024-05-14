import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import './App.css'

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);
  
  const [taskInput, setTaskInput] = useState("")
  const [tasks, setTasks] = useState<string[]>([])
  
  const [editTask, setEditTask] = useState({
    enabled: false,
    task: ""
  })

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("@tasks")

    if(tarefasSalvas){
      setTasks(JSON.parse(tarefasSalvas));
    }
  }, [])

  useEffect(() => {
    if(firstRender.current){
      firstRender.current = false;
      return;
    }

    localStorage.setItem("@tasks", JSON.stringify(tasks))
    console.log("use effect foi chamado")

  }, [tasks])

  const handleRegister = useCallback(() => {
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
    
  }, [taskInput, tasks])

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

    inputRef.current?.focus();

    setTaskInput(item)
    setEditTask({
      enabled: true,
      task: item
    })
  }

  const totalTarefas = useMemo(() => {
    return tasks.length
  }, [tasks])

  return (
    <div className='container'>
      <h1 className='titulo'>Lista de tarefas</h1>
      <div className='container-input'>
        <input
          className='input'
          placeholder='Digite o nome da tarefa...'
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value) }
          ref={inputRef}
        />
        <button onClick={handleRegister} className='button'>
          {editTask.enabled ? "Atualizar tarefa" : "Adicionar tarefa"}
        </button>
      </div>

      <hr/>

      <strong className='tasks-count'>Você tem {totalTarefas} tarefas</strong>

      {tasks.map((task) => (
        <section key={task} className='task'>
          <span>{task}</span>
          <div>
            <button  className='button-task editar' onClick={ () => handleEdit(task) }>Editar</button>
            <button  className='button-task apagar' onClick={ () => handleDelete(task) }>Excluir</button>
          </div>
        </section>
      ))}
    </div>
  )
}

export default App
