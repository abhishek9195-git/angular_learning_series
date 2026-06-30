import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: string[], searchTerm: string) {
        return items.filter((e) => e.toLowerCase().includes(searchTerm))
    }
}