import { Posts } from './types';

export const reducer = (state: Posts[], action: any): any => {
  switch (action.type) {
    case 'fetch data':
      return [...action.payload];
    case 'submit':
      return [...state, action.newdata];
    case 'delete':
      return state.filter(p => p.id !== action.id);
    case 'edit':
      const newPosts = [...state];
      const index = newPosts.indexOf(action.post);
      newPosts[index] = action.newdata;
      return [...newPosts];
  }
};

export const inputReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'handle text':
      return { ...state, [action.field]: action.payload };
    case 'clear':
      return { title: '', body: '' };
  }
};
