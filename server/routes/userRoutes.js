import express from 'express'

import createUser from '../controllers/user/CreateUser.js'
import { loginUser } from '../controllers/user/LoginUser.js'
import { renewToken } from '../controllers/user/renewToken.js'
import { updateUser } from '../controllers/user/UpdateUser.js'
import { validateJWT } from '../middlewares/validateToken.js'

const router = express.Router()


router.post('/create', createUser)
router.put('/update/:id', validateJWT, updateUser)
router.post('/login', loginUser)
router.post('/renew', validateJWT, renewToken)


export default router
