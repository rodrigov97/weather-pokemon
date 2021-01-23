import { NgModule } from '@angular/core';
// Services
import { ErrorHandlerService } from './error-handler.service';
import { TypeHandlerService } from './type-handler.service';

@NgModule({
    providers: [
        ErrorHandlerService,
        TypeHandlerService
    ]
})
export class ServiceModule { }
