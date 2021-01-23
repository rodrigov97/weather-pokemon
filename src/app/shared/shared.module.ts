import { NgModule } from '@angular/core';
// App
import { FooterComponent } from './footer/footer.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TypesComponent } from './types/types.component';

@NgModule({
    declarations: [
        // App
        FooterComponent,
        FormInputComponent,
        NavbarComponent,
        TypesComponent
    ],
    exports: [
        // App
        FooterComponent,
        FormInputComponent,
        NavbarComponent,
        TypesComponent
    ],
    imports: [
        // Angular
        CommonModule,
        ReactiveFormsModule
    ],
    providers: []
})
export class SharedModule { }
