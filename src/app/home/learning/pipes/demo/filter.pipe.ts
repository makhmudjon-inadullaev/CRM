import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter',
    standalone: true
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filter: string) {
        if(Array.isArray(value) && value.length && filter) {
            return value.filter((item: any) => item.toLowerCase().includes(filter.toLowerCase()));
        }
        return value;
    }
}