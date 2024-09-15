import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!, 
  apiKey: process.env.NEXT_PUBLIC_API!,
});

export const getAllBooks = async () => {
  const allBooks = await client.getList({
    endpoint: "bookcommerce",
  })

  return allBooks
}