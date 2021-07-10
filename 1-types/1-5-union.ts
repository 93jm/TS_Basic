{
  // Union Types: OR
  // Union type의 경우에는 값 중에 하나만 할당 할 수가 있다.
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //Union 실전 활용 예제
  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: "loggend in!",
      },
    };
  }

  //printLoginState(state)
  // success -> 축하 body
  // fail -> 엉엉 reason
  function printLoginState(state: LoginState): void {
    if ("response" in state) {
      console.log(`축하 ${state.response.body}`);
    } else {
      console.log(`엉엉 ${state.reason}`);
    }
  }
}
