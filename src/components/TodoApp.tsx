import { useState } from "react"
import {ListaTareas} from './ListaTareas'

export const TodoApp = () => {

  const [nuevaTarea, setNuevaTarea] = useState<string>('');
  const [listaTareas, setListasTareas] = useState<string[]>([])
  const handleAddTask = () => {
    if (nuevaTarea.trim() === '') return
    setListasTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
    setNuevaTarea('')
  };
  
  const handleBorrarTarea = (index: number) => {
    setListasTareas(tareas => tareas.filter((_, i) => i !== index))
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} placeholder="Nueva Tarea" />
        <div className="flex">
          <button onClick={handleAddTask} >Agregar Tarea</button>
        </div>
      </div> 
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div>
    
  )
}