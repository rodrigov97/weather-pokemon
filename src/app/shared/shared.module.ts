import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Components
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { ErrorScreenComponent } from './error-screen/error-screen.component';
import { FooterComponent } from './footer/footer.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
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
        TypesComponent,
        SpinnerComponent
    ],
    exports: [
        // App
        EmptyScreenComponent,
        ErrorScreenComponent,
        FooterComponent,
        FormInputComponent,
        NavbarComponent,
        TypesComponent,
        SpinnerComponent
    ],
    imports: [
        // Angular
        CommonModule,
        ReactiveFormsModule
    ],
    providers: []
})
export class SharedModule { }
