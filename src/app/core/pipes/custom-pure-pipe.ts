import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'truncate',
    pure: false
})
export class CustomPurePipe implements PipeTransform {
    transform(value: string, limit = 10, suffix = '...') {
        if (!value) return ''
        return value.length > limit ? value.slice(0, limit) + suffix : value
    }
}