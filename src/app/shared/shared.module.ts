import { NgModule } from '@angular/core';

// App
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        // Angular
        NavbarComponent,
        FooterComponent
    ],
    exports: [
        // Angular
        NavbarComponent,
        FooterComponent
    ],
    imports: [
    ],
    providers: []
})
export class SharedModule { }
