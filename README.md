# backpackr-homework

## project setting
```
- @vue/cli 4.3.1 로 vue 프로젝트 생성
- github 저장소 생성 및 초기 설정 및 commit & push
- scss 작성을 위한 npm 모듈 설치
> npm install -D sass-loader sass

/src
  /assets : 이미지, CSS, FONT 등에 대한 자원을 모아놓은 폴더
  /components : Vue Component 들을 모아놓은 폴더
  /directives : Vue 사용자 정의 지시어를 모아놓은 폴더
  /mixins : Vue Mixin 을 모아놓은 폴더
  /plugins : Vue Plugin 을 모아놓은 폴더
  /router : vue-route 폴더
  /store : vuex 폴더
  /views : Vue Container Component 들을 모아놓은 폴더

/tests : jest 기반 unit test 관련 폴더

/public/index.html : vue 애플리케이션의 뼈대가 되는 HTML

/src/App.vue : Root Component
/src/main.js : bootstrapping Vue & webpack entry



```



---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
