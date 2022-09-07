import { AbstractControl,FormControl } from "@angular/forms";
 export function hasExclamationMark(input: AbstractControl){
    const hasExclamationMark = input.value.indexOf('!') >=0;
    return hasExclamationMark? null : {needsEclamation:true};
 }