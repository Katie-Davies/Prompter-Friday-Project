/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: '1', nickname: 'Haruka' },
    { id: '2', nickname: 'Sukh' },
    { id: '3', nickname: 'Kate' },
  ])
}
