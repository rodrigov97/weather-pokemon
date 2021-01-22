import { NgModule } from '@angular/core';
// Services
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
    providers: [
        ErrorHandlerService
    ]
})
export class ServiceModule { }
