import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { InputComponent } from './app/ui/input/input.component';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();

  (async () => {
    const app = await createApplication({
      providers: [],
    });

    const inputElement = createCustomElement(InputComponent, {
      injector: app.injector,
    });
    customElements.define('wc-input', inputElement);
  })();

}


if (!environment.production) {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

}
