import { PRIVATE_KEY } from '$env/static/private'
import { server } from '$lib/server/server';

export async function test10(subject: string) {
  return 'test10: ' + PRIVATE_KEY + ' ' + subject + ' ' + server;
}