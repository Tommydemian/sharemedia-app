import { Schema } from '@sanity/types';

interface UserFields {
  name: string;
  title: string;
  type: string;
}

interface User extends Schema {
  name: 'user';
  title: 'User';
  type: 'document';
  fields: UserFields[];
  // Add any additional properties here
}

export default {
  name: 'user',
  title: 'User', 
  type: 'document',
  fields: [
    {
      name: 'username', 
      title: 'Username', 
      type: 'string'
    },
    {
      name: 'image', 
      title: 'Image', 
      type: 'string'
    }
  ],
  // Add any additional properties here
} as User;