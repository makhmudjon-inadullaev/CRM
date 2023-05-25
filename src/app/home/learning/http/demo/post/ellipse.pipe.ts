import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ellipse',
    standalone: true
})
export class EllipseTextPipe implements PipeTransform {
    transform(value: string, limit: number = 100) {
        if (value?.length > limit) {
            return value.substring(0, limit) + '...';
          }
        return value;
    }
}