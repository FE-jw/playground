import { useEffect, useState } from 'react';
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
        '|',
        'imageUpload',
        '|',
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

  const [content, setContent] = useState<string>('');
  const handleChangeContent = () => {
    setContent('<p>안녕하세요</p>');
  };
  const handleClearContent = () => {
    setContent('');
  };

  useEffect(() => {
    console.log('content changed:', content);
  }, [content]);

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={config}
        data={content}
        onChange={(evt, editor) => {
          setContent(editor.getData());
        }}
      />
      <button type="button" onClick={handleChangeContent}>
        클릭하면 에디터에 내용 추가됨
      </button>
      <button type="button" onClick={handleClearContent}>
        클릭하면 에디터에 내용 제거
      </button>
    </>
  );
}
