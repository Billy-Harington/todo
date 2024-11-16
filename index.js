import { Todo } from "./components/Todo.js";
import { todos } from "./utils/db.js";
import { submit } from "./utils/events.js";
import { reload } from "./utils/reload.js";

const container = document.querySelector('.container')
const form = document.forms.namedItem('add')

form.onsubmit = (e) => submit(e, container)

reload(todos, Todo, container)
