import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  ClassicEditor,
  GeneralHtmlSupport,
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
      GeneralHtmlSupport,
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
    },
    htmlSupport: {
      allow: [
        {
          name: /.*/, // 모든 태그 허용 (또는 'div', 'dl' 등 특정 태그)
          attributes: true, // 모든 속성 허용
          classes: true, // 모든 클래스 허용
          styles: true // 모든 스타일 허용
        }
      ]
    }
  };

  const [content, setContent] = useState<string>('');
  const handleChangeContent = () => {
    setContent('<p>안녕하세요</p>');
  };
  const handleClearContent = () => {
    setContent('');
  };
  const handleAddUI = () => {
    setContent(`<dl>
      <dt style="font-weight:bold;font-size:3em;">타이틀</dt>
      <dd style="background-color:lightyellow;">첫 번째 항목</dd>
      <dd>두 번째 항목</dd>
      <dd>세 번째 항목</dd>
    </dl>`);
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
        onChange={(_, editor) => {
          setContent(editor.getData());
        }}
      />
      <div>
        <button type="button" onClick={handleChangeContent}>
          클릭하면 에디터에 내용 추가됨
        </button>
      </div>
      <div>
        <button type="button" onClick={handleClearContent}>
          클릭하면 에디터에 내용 제거
        </button>
      </div>
      <div>
        <button type="button" onClick={handleAddUI}>
          클릭하면 복잡한 UI 추가됨
        </button>
      </div>
    </>
  );
}
