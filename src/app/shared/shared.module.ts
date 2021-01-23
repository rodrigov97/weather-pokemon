import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Components
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { ErrorScreenComponent } from './error-screen/error-screen.component';
import { FooterComponent } from './footer/footer.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TypesComponent } from './types/types.component';
// Modules
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        // App
        EmptyScreenComponent,
        ErrorScreenComponent,
        FooterComponent,
        FormInputComponent,
        NavbarComponent,
        TypesComponent
    ],
    exports: [
        // App
        EmptyScreenComponent,
        ErrorScreenComponent,
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
