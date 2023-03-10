import { Schema } from '@sanity/types';

interface CommentFields {
  name: string;
  title: string;
  type: string;
}

export interface Comment extends Schema {
  name: 'comment';
  title: 'Comment';
  type: 'document';
  fields: CommentFields[];
}

export default {
  name: 'comment',
  title: 'Comment', 
  type: 'document',
  fields: [
    {
      name: 'postedBy', 
      title: 'PostedBy', 
      type: 'postedBy'
    },
    {
      name: 'comment', 
      title: 'Comment', 
      type: 'string'
    } 
  ],
} as Comment;