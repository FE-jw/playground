# 사용 방법

## 패키지 설치
```shell
npm i
```

## 개발 모드 실행
개발 모드 실행 후 [localhost:7000/ko.html](http://localhost:7000/ko.html) 로 접근하여 확인할 수 있습니다.
```shell
npm run dev
```

## 번역 파일 생성
xlsx 파일 생성 또는 수정 후 아래 명령어를 실행합니다.
```shell
npm run lang
```

## 빌드
서버에 업로드 할 파일이 dist 폴더에 생성됩니다.
```shell
npm run build
```

## 개발 방법
실제 개발은 src 폴더에서 진행합니다.  
js와 scss 파일은 저장 시 자동으로 컴파일되어, dist 폴더에 각각 minified 버전으로 생성됩니다.  
js 파일은 babel을 통해 하위 브라우저에서도 동작하도록 변환 및 압축되고,  
scss 파일은 자동으로 css로 변환되어 dist 폴더에 추가됩니다.