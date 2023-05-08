import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { InputComponent } from './app/ui/input/input.component';

(async () => {
  const app = await createApplication({
    providers: [],
  });

  const inputElement = createCustomElement(InputComponent, {
    injector: app.injector,
  });
  customElements.define('wc-input', inputElement);
})();
