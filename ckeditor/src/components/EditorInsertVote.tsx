import { ButtonView, IconPlus, Plugin } from 'ckeditor5';
import { useToggleStore } from './../store/useToggleStore';

export class CustomWidget extends Plugin {
  static get pluginName() {
    return 'CustomWidget';
  }

  init(): void {
    this.editor.ui.componentFactory.add('CustomWidget', locale => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Custom Widget',
        icon: IconPlus,
        tooltip: true
      });

      view.on('execute', () => {
        const componentState = useToggleStore.getState().isComponentOn;
        useToggleStore.getState().setComponentOn(!componentState);
      });

      return view;
    });
  }
}
