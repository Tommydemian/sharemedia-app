import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID, 
    dataset: 'production', 
    apiVersion: '2023-02-09',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_EDITOR_TOKEN
});

const builder = imageUrlBuilder();

export const urlBuilder = ( source: string ) => builder.image(source)