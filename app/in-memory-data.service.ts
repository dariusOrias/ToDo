export class InMemoryDataService {
  createDb() {
    let todoArray = [
      {
          id: 1, 
          name: 'Mon Quiz',
          message: 'Just do it',
          is_done: false
      },
      {
          id: 2, 
          name: 'Tues Quiz',
          message: 'Just do it',
          is_done: false
      },
      {
          id: 3, 
          name: 'Wed Proj',
          message: 'Just do it',
          is_done: false
      },
      {
          id: 4, 
          name: 'Thurs Party',
          message: 'Just do it',
          is_done: false
      },
      {
          id: 5, 
          name: 'Fri Exam',
          message: 'Just do it',
          is_done: false
      },
      {
          id: 6, 
          name: 'Mon Exam',
          message: 'Just do it',
          is_done: false
      },
      {
          id: 7, 
          name: 'Tues Revise',
          message: 'Just do it',
          is_done: false
      },
      {
          id: 8, 
          name: 'Wed Presentation',
          message: 'Just do it',
          is_done: false
      },
      {
          id: 9, 
          name: 'Thurs No class',
          message: 'Just do it',
          is_done: false
      },
      {
          id: 10,
          name: 'Fri go home',
          message: 'Just do it',
          is_done: false
       }
    ];
    return {todoArray};
  }
}
