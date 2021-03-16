const pool = require('../../db')

module.exports = {
    async readAll(req, res) {
        try {
            const allTheaters = await pool.query('SELECT * FROM sessions')
            res.json(allTheaters.rows)
        } catch (error) {
            console.error(error.message)
        }
    },
    async readOne(req, res) {
        try {
            const {id} = req.params
            const theater = await pool.query('SELECT * FROM sessions WHERE id = $1', [id])
            res.json(theater.rows)
        } catch (error) {
            console.error(error.message)
        }
    },
    async create(req, res) {
        try {
            const {movie} = req.body
            const {description} = req.body
            const newTheater = await pool.query(
                'INSERT INTO sessions (movie, description) values ($1, $2) RETURNING *',
                [movie, description]
            )
            res.json(newTheater.rows)
        } catch(error) {
            console.error(error.message)
        }
    },
    async update(req, res) {
        try {
            const {id} = req.params
            const {movie} = req.body
            const {description} = req.body

            const updateTheater = await pool.query(
                'UPDATE sessions SET movie = $1, description = $2 WHERE id = $3', 
                [movie, description, id]
            )
            res.json('Todo was updated')
        } catch (error) {
            console.error(error.message)
        }
    },
    async delete(req, res) {
        try {
            const {id} = req.params
            await pool.query('DELETE FROM sessions WHERE id = $1', [id])
            res.json('Todo was deleted')
        } catch (error) {
            console.error(error.message)
        }
    }
}