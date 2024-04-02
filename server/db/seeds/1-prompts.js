/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('prompts').del()
  await knex('prompts').insert([
    {
      id: 1,
      prompt:
        'If you could only eat one food for the rest of your life, what would it be and why?',
    },
    {
      id: 2,
      prompt:
        'Would you rather fight one horse-sized duck or a hundred duck-sized horses?',
    },
    { id: 3, prompt: "What's the most ridiculous fact you know?" },
    {
      id: 4,
      prompt:
        'If you could have any superpower for a day, what would you choose and how would you use it?',
    },
    { id: 5, prompt: "What's the weirdest dream you've ever had?" },
    {
      id: 6,
      prompt:
        'If you could only eat one type of cuisine for the rest of your life, what would it be?',
    },
    {
      id: 7,
      prompt:
        'What superpower would be the most inconvenient to have in everyday life?',
    },
    { id: 8, prompt: 'If animals could talk, which would be the rudest?' },
    {
      id: 9,
      prompt: 'What would be the funniest thing to fill a piñata with?',
    },
    {
      id: 10,
      prompt: 'If you were a flavor of ice cream, what would you be and why?',
    },
  ])
}
