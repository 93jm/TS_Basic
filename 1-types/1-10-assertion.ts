{
  /**
   * Type Assertions 별로 쓰지 말아야 한다
   * 왜냐하면 내가 정말로 확신을 가지고 타입을 강제화 시키는 것인데
   * 만약에 그 확신한 타입이 틀렸다면 예상치 못한 값이 나오기 때문이다.
   */

  //Type Assertions 예제

  function jsStrFunc(): any {
    return "hello";
  }

  //result는 String이 리턴되는 값을 받았지만
  //타입스크립트는 any타입이라서 문자열 관련으로 사용 가능한 기능들을 사용못한다 ex : length...
  const result = jsStrFunc();

  //이때 아래와 같이 Type Assertions을 사용하면 내가 강제적으로 확정 지어질 수 있다.
  console.log((result as string).length);

  //하지만 만약 Type Assertions을 사용해서 강제화 했지만 알고보니 타입이 틀렸다면 어떻게 될까?
  function jsStrFunc1(): any {
    return 1;
  }
  const result1 = jsStrFunc1();

  //에러가 나지 않지만 undefined가 나게 된다.
  console.log((result1 as string).length);

  //아니면 변수 앞에서 기호를 사용하여 작성해도 as와 동일하다
  console.log((<string>result).length);

  // const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // ! 을 작성하면 절대적으로 값이 있다고 확신이 있을때 작성을 할 수 있다.
  // numbers!.push(2); 이렇게 해도 되고 함수를 호출할때 const numbers = findNumbers()!; 이렇게 해줘도 된다
  numbers!.push(2);
}
