{
  // //JavaScript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // //TypeScript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // //JavaScript
  // function jsFetchNum(id) {
  //   //code ...
  //   //code ...
  //   //code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(1000);
  //   });
  // }

  // //TypeScript
  // function FetchNum(id: string): Promise<number> {
  //   //code ...
  //   //code ...
  //   //code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(1000);
  //   });
  // }

  //JavaScript => TypeScript
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("Steve", "Jobs");
  printName("Min");
  printName("good", undefined);

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));

  console.log(addNumbers(1, 2, 3, 4));
}
