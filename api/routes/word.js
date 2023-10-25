import express from 'express'
import { getRandomWord} from '../controllers/word.js'
const router = express.Router()
// router.get('/', getWord)
router.get('/randomWord', getRandomWord)


export default router
