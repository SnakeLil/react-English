import express from 'express'
import { getRandomWord,getAllWord} from '../controllers/word.js'
const router = express.Router()
// router.get('/', getWord)
router.get('/randomWord', getRandomWord)
router.get('/allWord',getAllWord)

export default router
