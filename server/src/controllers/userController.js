const pool = require('../../db')

module.exports = {
    async readAll(req, res) {
        try {
            const allUsers = await pool.query('SELECT * FROM users')
            res.json(allUsers.rows)
        } catch (error) {
            console.error(error.message)
        }
    },
    async readOne(req, res) {
        try {
            const {id} = req.params
            const user = await pool.query('SELECT * FROM users WHERE id = $1', [id])
            res.json(user.rows)
        } catch (error) {
            console.error(error.message)
        }
    },
    async create(req, res) {
        try {
            const {firstName} = req.body
            const {email} = req.body
            
            const newUser = await pool.query(
                'INSERT INTO users (first_name, email) values($1, $2) RETURNING *', 
                [firstName, email]
            )
            res.json(newUser.rows)
        } catch (error) {
            console.error(error.message)
        }
    },
    async update(req, res) {
        try {
            const {id} = req.params
            const {firstName} = req.body
            const {email} = req.body

            const updateUser = await pool.query(
                'UPDATE users SET first_name = $1, email = $2 WHERE id = $3',
                [firstName, email, id]
            )
            res.json('User was updated')
        } catch (error) {
            console.error(error.message)
        }
    },
    async delete(req, res) {
        try {
            const {id} = req.params
            await pool.query(
                'DELETE FROM users WHERE id = $1',
                [id]
            )      
            res.json('User was deleted')
        } catch (error) {
            console.error(error.message)
        }
    }
}