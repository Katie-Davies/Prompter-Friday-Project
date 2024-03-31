export interface Prompt {
  id: number
  prompt: string
}

export interface CommentData {
  comment: string
  prompt_id?: number

  user_id?: string | undefined
}

export interface Comment extends CommentData {
  id: number
}
