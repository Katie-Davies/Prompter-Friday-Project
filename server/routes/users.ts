import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const data = req.body
    console.log('post', data)
    await db.addUser(data)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id

    const user = await db.getCommentUser(id)

    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
