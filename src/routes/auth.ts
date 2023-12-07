import express  from "express"
import  {createUser} from '../controllers/auth'
const router = express.Router()


router.post('/createUser',createUser)


export default router