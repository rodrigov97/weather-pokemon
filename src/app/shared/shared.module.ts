import { NgModule } from '@angular/core';
// App
import { FooterComponent } from './footer/footer.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        // App
        FooterComponent,
        FormInputComponent,
        NavbarComponent
    ],
    exports: [
        // App
        FooterComponent,
        FormInputComponent,
        NavbarComponent
    ],
    imports: [
        // Angular
        CommonModule,
        ReactiveFormsModule
    ],
    providers: []
})
export class SharedModule { }
