{
  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login1(): LoginState {
    return {
      result: "success",
      response: {
        body: "loggend in!",
      },
    };
  }

  //printLoginState(state)
  // success -> 축하 body
  // fail -> 엉엉 reason
  // 유니온 타입을 사용할때 공통적인 프로퍼티를 가지고 있으면 조금 더 구분하기 쉽게 만든다
  function printLoginState2(state: LoginState): void {
    if (state.result === "success") {
      console.log(`축하 ${state.response.body}`);
    } else if (state.result === "fail") {
      console.log(`엉엉 ${state.reason}`);
    }
  }
}
