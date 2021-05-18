import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  clicked: any;

  constructor() { }

  getNotes() {
    return [
        {
          id: 1,
          title:'Заметка',
          paragraph1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptas maiores esse tempore impedit numquam laborum assumenda beatae itaque vel architecto, iste ratione exercitationem accusantium! Sed iusto doloribus facere provident!',
          paragraph2:'Cumque dolorem magni aut quasi odio facilis recusandae ratione pariatur dolores. Adipisci dolores veritatis hic cupiditate velit saepe sit ab quae rerum delectus perferendis, veniam natus.',
          paragraph3:'Iste optio molestiae facilis?Facilis, nisi! Excepturi quae tempora necessitatibus architecto obcaecati pariatur debitis, sint nisi labore, repudiandae expedita, inventore illum. Sapiente, laboriosam deserunt ipsum temporibus ratione cumque modi veritatis, suscipit non facilis dolore.',
          isVisible: false,
        },
        {
          id: 2,
          title:'Заметка',
          paragraph1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptas maiores esse tempore impedit numquam laborum assumenda beatae itaque vel architecto, iste ratione exercitationem accusantium! Sed iusto doloribus facere provident!',
          paragraph2:'Cumque dolorem magni aut quasi odio facilis recusandae ratione pariatur dolores. Adipisci dolores veritatis hic cupiditate velit saepe sit ab quae rerum delectus perferendis, veniam natus.',
          paragraph3:'Iste optio molestiae facilis?Facilis, nisi! Excepturi quae tempora necessitatibus architecto obcaecati pariatur debitis, sint nisi labore, repudiandae expedita, inventore illum. Sapiente, laboriosam deserunt ipsum temporibus ratione cumque modi veritatis, suscipit non facilis dolore.',
          isVisible: false,
        },
        {
          id: 3,
          title:'Заметка',
          paragraph1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptas maiores esse tempore impedit numquam laborum assumenda beatae itaque vel architecto, iste ratione exercitationem accusantium! Sed iusto doloribus facere provident!',
          paragraph2:'Cumque dolorem magni aut quasi odio facilis recusandae ratione pariatur dolores. Adipisci dolores veritatis hic cupiditate velit saepe sit ab quae rerum delectus perferendis, veniam natus.',
          paragraph3:'Iste optio molestiae facilis?Facilis, nisi! Excepturi quae tempora necessitatibus architecto obcaecati pariatur debitis, sint nisi labore, repudiandae expedita, inventore illum. Sapiente, laboriosam deserunt ipsum temporibus ratione cumque modi veritatis, suscipit non facilis dolore.',
          isVisible: false,
        },
        {
          id:4,
          title:'Заметка',
          paragraph1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis voluptas maiores esse tempore impedit numquam laborum assumenda beatae itaque vel architecto, iste ratione exercitationem accusantium! Sed iusto doloribus facere provident!',
          paragraph2:'Cumque dolorem magni aut quasi odio facilis recusandae ratione pariatur dolores. Adipisci dolores veritatis hic cupiditate velit saepe sit ab quae rerum delectus perferendis, veniam natus.',
          paragraph3:'Iste optio molestiae facilis?Facilis, nisi! Excepturi quae tempora necessitatibus architecto obcaecati pariatur debitis, sint nisi labore, repudiandae expedita, inventore illum. Sapiente, laboriosam deserunt ipsum temporibus ratione cumque modi veritatis, suscipit non facilis dolore.',
          isVisible: false,
        }
      ]
  }
}
