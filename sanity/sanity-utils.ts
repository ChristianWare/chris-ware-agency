import {createClient, groq} from 'next-sanity'
import { Posts } from '../src/app/lib/interface'

export async function getPosts(): Promise<Posts[]> {
  const client = createClient({
    projectId: 'jvb6iw9l',
    dataset: 'production',
    apiVersion: '2023-08-31',
  })

  return client.fetch(
    groq`*[_type == 'post']{
        _id,
        _createdAt,
        title,
        overview,
        "slug": slug.current,
         "image": image.asset->url,
         url,
         content
    }`,
  )
}
