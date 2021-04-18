export const ADD_TODO = 'ADD_TODO';

export function addTodo(title){
     return {
         type: ADD_TODO,
         todoItem: {
             _id: (new Date().getTime()),
             title
         }
     };
}