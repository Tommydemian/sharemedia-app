import { Schema } from '@sanity/types';

interface SaveFields {
  name: string;
  title: string;
  type: string;
}

interface Save extends Schema {
  name: 'save';
  title: 'Save';
  type: 'document';
  fields: SaveFields[];
}

export default {
  name: 'save',
  title: 'Save', 
  type: 'document',
  fields: [
    {
      name: 'postedBy', 
      title: 'PostedBy', 
      type: 'postedBy'
    },
    {
      name: 'userID', 
      title: 'UserID', 
      type: 'string'
    } 
  ],
} as Save;