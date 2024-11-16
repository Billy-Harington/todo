import { Todo } from "../components/Todo.js"
import { todos } from "./db.js"
import { reload } from "./reload.js"

export function submit(e, place) {
    e.preventDefault()
    const val = new FormData(e.target).get('title').trim()

    const todo = {
        id: crypto.randomUUID(),
        title: val,
        time: new Date().toLocaleTimeString(),
        status: false
    }

   

    if (val.length === 0) {
        alert('pshel v jopu')
        return
    }

    todos.push(todo)
    e.target.reset()
    reload(todos, Todo, place)
}