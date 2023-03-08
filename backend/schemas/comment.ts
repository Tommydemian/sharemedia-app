import { Schema } from '@sanity/types';

interface CommentFields {
  name: string;
  title: string;
  type: string;
}

interface Comment extends Schema {
  name: 'comment';
  title: 'Comment';
  type: 'document';
  fields: CommentFields[];
  // Add any additional properties here
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
      type: 'comment'
    }
  ],
} as Comment;