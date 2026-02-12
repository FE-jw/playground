import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  Base64UploadAdapter,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Underline,
  Alignment,
  Heading,
  Link,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import { CustomWidget } from './EditorInsertVote'; // 커스텀 위젯

// Emoji 플러그인
// import Emoji from '@phudak/ckeditor5-emoji/src/emoji';

export default function Editor() {
  const config: any = {
    licenseKey: 'GPL',
    plugins: [
      Base64UploadAdapter,
      Essentials,
      Paragraph,
      Bold,
      Italic,
      Underline,
      Alignment,
      Heading,
      Link,
      Image,
      ImageCaption,
      ImageResize,
      ImageStyle,
      ImageToolbar,
      ImageUpload,
      // Emoji,
      CustomWidget
    ],
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'heading',
        '|',
        'bold',
        'italic',
        'underline',
        'alignment',
        '|',
        'link',
        'imageUpload',
        '|',
        // 'emoji',
        'customWidget',
        '|'
      ]
    },
    image: {
      toolbar: ['imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight', '|', 'imageTextAlternative'],
      styles: ['alignLeft', 'alignCenter', 'alignRight'],
      defaultStyle: 'left'
    }
  };

  return <CKEditor editor={ClassicEditor} config={config} />;
}
