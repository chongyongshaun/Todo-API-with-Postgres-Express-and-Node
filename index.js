const express = require('express')
const app = express();
const cors = require('cors')
const pool = require("./db")

app.listen(5000, () => {
    console.log("listening on port 5000")
})

//middleware
app.use(express.json()) //access req.body
app.use(cors())

//ROUTES

//create todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description])
        res.json("Todo was created!")
    } catch (err) {
        console.error(err.message)
    }
})

//get all tooo
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const selectedTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
        res.json(selectedTodo.rows[0])

    } catch (err) {
        console.error(err.message)
    }
})
//update todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        res.json("updated todo")
    } catch (err) {
        console.error(err.message)
    }
})


//delete todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query(`DELETE FROM todo WHERE todo_id =${id}`)
        res.json("todo has been deleted")
    } catch (err) {
        console.error(err.message)
    }
})
