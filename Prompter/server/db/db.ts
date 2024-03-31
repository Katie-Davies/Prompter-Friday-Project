import connection from './connection.ts'

const db = connection

export async function getAllPrompts() {
  return await db('prompts').select()
}

export async function getPromptbyId(id: number) {
  return await db('prompts').where({ id }).select().first()
}

export async function addPrompts(data: any) {
  await db('prompts').insert(data)
}

export async function getPromptComments(id: number) {
  return await db('prompts')
    .join('comments', 'prompts.id', 'comments.prompt_id')
    .where('comments.prompt_id', id)
    .select()
}

export async function addCommentsToPrompt(data: any) {
  await db('comments').insert(data)
}

export async function deleteComment(id: number) {
  await db('comments').where({ id }).del()
}
