# Template For Obigo WebApp
## Architecture
    기존 Obigo JS Framework 폴더 구조 참조
    
    Application Structure

    ├── dist    Build Folder

    ├── build.config	Webpack config

    ├── config	config environment for app with manifest

    ├── gadgets	workspace for gadgets

    │ ├── build.config  Webpack config for large gadget

    │ ├── config	config environment for large gadget

    │ ├── icons	icons for gadget (preview, shortcut)

    │ └── src	Gadget source files

    ├── src	Application source code

    │ ├── App.vue	Main component for application

    │ ├── main.js	Application bootstrap and rendering

    │ ├── assets	assets for apps

    │ ├── components	Reusable Components

    │ ├── i18n	i18n module

    │ └── store	vuex store

    └── index.html	Index HTML template for app
## History
- webpack 5.75 버전
    - output
        - clean 속성 추가로 빌드시 기존에 있던 파일들 삭제하도록 설정
    - Loader
        - css 로더 추가
        - scss 로더 추가
        - 이미지 로더 추가
        - font 로더 추가
        - csv, xml 로더 추가
        - vue loader 추가
        - ts loader 추가
    - Plugin 
        - HtmlWebpackPlugin
    - mode
        - dev, prod 모드 구분
        - dev inline-source-map 허용
        - ts 에러 발생으로 ts-nocheck 설정
- rnbs 1.66 템플릿의 config.xml 파일 추가
- vue 3.2 버전
- typescript
    - npx tsc --init으로 tsconfig 파일 생성
    - vue 파일 import를 위해 shims-vue.d.ts 파일 생성
    - tsconfig
        - target : es3
        - module : commonJS
        - moduleResolution : node
        - outDir : "./dist"
        - esModuleInterop : true
        - forceConsistentCasingInFileNames : true
        - noImplicitAny : true
        - noImplicitThis : true
        - noImplicitReturns : true
        - resolveJsonModule : true
- node_modules
    - @vue/shared/dist/shared.esm-bundler.js

        모든 브라우저에서 정규표현식 s플래그를 지원하지는 않음, 자세한 내용은 아래 링크 참조
        https://ko.javascript.info/regexp-character-classes
        ```js
        const styleCommentRE = /\/\*.*?\*\//gs;
        // 아래와 같이 수정
        const styleCommentRE = /\/\*[s/S]*?\*\//g;
- eslint
    - extends
        - plugin:vue/vue3-recommended
        - plugin:prettier/recommended
    - parser
        - vue-eslint-parser
- prettier