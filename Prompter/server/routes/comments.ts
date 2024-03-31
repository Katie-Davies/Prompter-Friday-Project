import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

router.get('/:prompt_id', async (req, res) => {
  try {
    const id = Number(req.params.prompt_id)
    const commentObj = await db.getPromptComments(id)
    if (!commentObj) {
      res.sendStatus(404)
    }
    res.json(commentObj)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/:prompt_id', async (req, res) => {
  try {
    const id = Number(req.params.prompt_id)
    const preData = req.body
    const data = { ...preData, prompt_id: id }
    console.log(data)
    await db.addCommentsToPrompt(data)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    console.log('delete backend')
    const id = Number(req.params.id)
    await db.deleteComment(id)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
