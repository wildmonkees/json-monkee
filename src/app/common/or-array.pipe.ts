import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'orArray'
})
export class OrArrayPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (_.isArray(value)) {
            return value;
        }
        return [value];
    }

}
