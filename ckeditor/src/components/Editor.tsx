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

export default function Editor() {
  const config = {
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
      ImageUpload
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
        '|'
      ]
    },
    image: {
      styles: [
        { name: 'alignLeft', title: '좌측 정렬', icon: 'left', className: 'image-style-align-left' },
        { name: 'alignCenter', title: '가운데 정렬', icon: 'center', className: 'image-style-align-center' },
        { name: 'alignRight', title: '우측 정렬', icon: 'right', className: 'image-style-align-right' }
      ],
      toolbar: ['imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight', '|', 'imageTextAlternative'],
      defaultStyle: 'alignLeft'
    }
  };

  return <CKEditor editor={ClassicEditor} config={config} />;
}
