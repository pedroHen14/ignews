import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import sm from '../../sm.json'

export const endpoint = process.env.PRISMIC_ENDPOINT
export const repositoryName = prismic.getRepositoryName(endpoint)

export function getPrismicClient(config = {}) {
  const client = prismic.createClient(
    endpoint, 
    {
      ...config,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )

  enableAutoPreviews({
    client,
    previewData: config,
    req: config.req
  })
  
  return client;
}