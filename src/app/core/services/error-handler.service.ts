import { Injectable } from '@angular/core';

export interface FormErrorData {
    [key: string]: string;
}

export interface FormErrorMessages {
    [error: string]: string;
}

const ERROR_MESSAGES: FormErrorMessages = {
    required: 'Não sou um Pokémon psíquico, digite o nome da cidade !',
};

@Injectable()
export class ErrorHandlerService {

    get(error: string, errorData: FormErrorData = {}): string {
        return this.buildMessage(errorData, error);
    }

    private buildMessage(errorData: FormErrorData, error: string): string {
        const message = ERROR_MESSAGES[error] || '';
        const keys = Object.keys(errorData);

        if (keys.length <= 0) { return message; }

        return keys.reduce((acc: string, key: string): string => {
            return acc.replace(`{{${key}}}`, errorData[key]);
        }, message);
    }
}
