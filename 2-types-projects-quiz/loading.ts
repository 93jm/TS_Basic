{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(value: ResourceLoadState) {
    if (value.state === "loading") {
      console.log("👀 loading...");
    } else if (value.state === "success") {
      console.log(`😃 ${value.response.body}`);
    } else if (value.state === "fail") {
      console.log(`😱 ${value.reason}`);
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
