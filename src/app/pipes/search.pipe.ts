import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from '../todo/todo.interface';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: ITodo[], title: string) {
    if (!title) return value;
    let filterData = value.filter((d) => {
      return d.title.toLocaleLowerCase().includes(title.toLowerCase());
    });
    return filterData;
  }
}
