import { AbstractControl, ValidationErrors } from "@angular/forms";

export function twoPasswordCheckVlidator (controlGroup: AbstractControl): ValidationErrors | null {

    let errors: ValidationErrors;

    if (controlGroup.value.password && controlGroup.value.passwordConfirmation) {

        if (controlGroup.value.password !== controlGroup.value.passwordConfirmation) return { name: 'Mots de passe différents' };

        return null;

    }

    return { name: 'Champ obligatoire' };

}