{
  // Enum
  // 여러가지의 상수를 모아서 관리 해 줄수 있는 녀석이다.
  // 하지만 사용하지 않는 것이 좋다 이유는 : enum으로 지정된 변수는 다른 어떤 숫자도 할당할 수 있다는게 문제다
  // 그렇기 때문에 Enum보단 Union을 사용하면 된다

  //JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  //freeze는 수정이 안되게 말 그대로 꽁꽁 얼려서 고정시켜놓는 API다
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //TypeScript

  //시작하는 값을 1로 하고 싶으면 처음 값만 바꿔주면 된다
  //아에 다른 값으료 표기를 원하면 똑같이 값을 대입해주면 된다.
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";

  enum DAYS {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }
  console.log(DAYS.Friday);
  let day = DAYS.Satarday;
  day = DAYS.Tuesday;
  day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = "Tuesday";
  dayOfweek = "Wednesday";

  /*
  안드로이드나 IOS는 코틀린이나 스위프트를 언어를 사용하는데
  이런 사용자의 데이터를 JSON으로 묶어서 다른 클라이언트로 보낼때
  모바일에서 사용하는 네이티브 프로그래밍 언어 같은 경우는 Union을 표현할 수 없기에 Enum을 쓰지만
  웹이거나 다른 모바일 클라이언트와 의사소통할 필요가 없다면 Enum 대신에는 Type을 이용하는게 더 안전하다.
  */
}
