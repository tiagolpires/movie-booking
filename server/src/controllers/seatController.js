const pool = require('../../db')

module.exports = {
    async readUserSeats(req, res) {
        try {
            const {id} = req.params
            const seats = await pool.query('SELECT * FROM seats WHERE user_id = $1', [id])
            res.json(seats.rows)
        } catch (error) {
            console.error(error.message)
        }
    },
    async create(req, res) {
        try {
            const {seats} = req.body
            const {sessionId} = req.body
            const {userId} = req.body

            seats.map(async (seat) => {
                const newSeat = await pool.query(
                        'INSERT INTO seats (seat, session_id, user_id) values ($1, $2, $3)',
                        [seat, sessionId, userId]
                    )
            })

            const newUsersTheaters = await pool.query('INSERT INTO users_sessions (user_id, session_id) values ($1, $2)',
                [userId, sessionId]
            )

            res.json('Seats was created')
        } catch(error) {
            console.error(error.message)
        }
    }
}