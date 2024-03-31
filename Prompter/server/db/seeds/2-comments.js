/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {
      id: 1,
      comment:
        'Creamy vegetable chicken soup for the nutrional value, fibre and protein.',
      prompt_id: 1,
      user_id: 'a74b',
    },
    {
      id: 2,
      comment: 'Tiny horses for the cuteness factor. Plus, less terrifying.',
      prompt_id: 2,
      user_id: 'a74b',
    },
    {
      id: 3,
      comment:
        'The shortest war in history lasted only 38 minutes. It occurred between the countries of Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after the British bombarded their palace, resulting in minimal casualties and a very brief conflict!',
      prompt_id: 3,
      user_id: 'a74b',
    },
  ])
}
