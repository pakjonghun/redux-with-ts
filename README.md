## ts 이용 리덕스 연습

tools : redux-react, redux, redux-thunk

## 느낀점

- 리덕스의 각종 타입을 맞추다 보니 코드가 길어져서
- 결국 위해서 훅을 2개나 만들어주었다
- 어떻게 해서든 타입을 쓰기 위해서 어거지로 만든거 같은 느낌이
- (js 만 해서 그런지 영 익숙치가 않다.)
- 특히 useSelector에 있는 제네릭 이 컴바인된 리듀서의 타입을 제대로 인식을 못해서 ... 통째로 타입을 씌워서 내보내고 다시 훅으로 만들어서 받아서 썻는데..

- 이게 맞나 싶기도 하다 => useSelectorHoookType<ReturnType<typeof rootReducer>> 요런 타입을 리턴해서 useSelector 을 썻다.

- 타입이 잘 작동해서 좋긴 했찌만.. 좀 길더라도 그냥 {reducerName:reducerType} 이렇게 수동으로 집어 넣으면.. 안되될까 싶기도 하다.

## 궁금한점

redux-tool redux-saga 는 아예 손도 안대었고 성크도 썼는지 마는지 잘 모르겠다 미들웨어로 넣어주긴 했는데.

> 두 세번 더 만들어 보고 손에 익으면 다음으로 넘어가야 겠다.
