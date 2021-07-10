{
  /*
   * JavaScript
   * 원시타입: number, string, boolean, bigint, symbol, null, undefined
   * 오브젝트: function, array....
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;

  // unknown 💩
  // 가능하면 쓰지 않는게 좋다 (얘는 any 보단 겸손함)
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  // 이것 또한 가능하면 쓰지 않는게 좋다 (얘는 너무 뻔뻔함)
  let anything: any = 0;
  anything = "hello";

  // void
  // 아무것도 리턴하지 않을 때 사용한다
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; //💩

  // never
  //에러를 처리할때 사용하거나 아니면 while문을 사용해서 끝나지 않는 코드를 작성되어 있을때, 즉 리턴할게 전혀 없을때 사용하게 된다
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    // while(true){
    // }
  }
  let neverEnding: never; //💩

  // object
  // object는 너무 광범위하다 게다가 배열까지도 타입 설정이 가능하기에 사용하지말고 더욱 명확한 타입을 설정 해줘야 한다.
  let obj: object; //💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "min" });
  acceptSomeObject({ animal: "dog" });
}
