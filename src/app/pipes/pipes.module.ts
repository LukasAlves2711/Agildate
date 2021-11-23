import { NgModule } from "@angular/core";
import { FindServiceFromKeyPipe } from "./find-service-from-key.pipe";

@NgModule({
    declarations: [FindServiceFromKeyPipe],
    imports:[],
    exports:[FindServiceFromKeyPipe]
})
export class PipesModule{}