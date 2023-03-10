import { Schema } from '@sanity/types';

interface PinFields {
  name: string;
  title: string;
  type: string;
  options?: {hotspot: boolean}
}

interface Pin extends Schema {
  name: 'pin';
  title: 'Pin';
  type: 'document';
  fields: PinFields[];
  // Add any additional properties here
}

export default {
    name: 'pin',
    title: 'Pin', 
    type: 'document',
    fields: [
      {
        name: 'title', 
        title: 'Title', 
        type: 'string'
      },
      {
        name: 'about', 
        title: 'About', 
        type: 'string'
      },
      {
        name: 'destination', 
        title: 'Destination', 
        type: 'string'
      },
      {
        name: 'category', 
        title: 'Category', 
        type: 'string'
      },
      {
        name: 'image', 
        title: 'Image', 
        type: 'string',
        options: {
            hotspot: true
        }
      },
      {
        name: 'userID', 
        title: 'UserID', 
        type: 'string'
      },
      {
        name: 'postedBy', 
        title: 'PostedBy', 
        type: 'postedBy'
      },
      {
        name: 'save', 
        title: 'Save', 
        type: 'array',
        of: [{type: 'save'}]
      },
      {
        name: 'comments', 
        title: 'Comments', 
        type: 'array',
        of: [{type: 'comment'}]
      },
      
    ],
    // Add any additional properties here
  } as Pin;
