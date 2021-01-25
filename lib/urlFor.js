import React from 'react'
import myConfiguredSanityClient from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(myConfiguredSanityClient)

export const urlFor = (source) => {
  return builder.image(source)
}