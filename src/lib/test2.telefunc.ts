import { PRIVATE_KEY } from '$env/static/private'

export async function test2(subject: string) {
  return 'test2: ' + PRIVATE_KEY + ' ' + subject;
}