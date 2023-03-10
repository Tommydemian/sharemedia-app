import { Schema } from '@sanity/types';

interface UserFields {
  name: string;
  title: string;
  type: string;
  username: string; 
}

interface User extends Schema {
  name: 'user';
  title: 'User';
  type: 'document';
  fields: UserFields[];
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
} as User;





