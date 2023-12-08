import express  from "express"
import  {createUser,userLogin} from '../controllers/auth'
const router = express.Router()


router.post('/createUser',createUser)
router.post('/login',userLogin)


export default router