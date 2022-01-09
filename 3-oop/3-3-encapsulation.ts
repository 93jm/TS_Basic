{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public
  //private
  //protected

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    //커피 콩 전달 받아서 기존 커피콩에 추가함
    //constructor는 오브젝트 만들때 처음 실행되는 함수
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    //외부에서는 아래의 함수를 사용하여 커피콩의 갯수를 수정할 수 있음
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be grater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker3 = CoffeeMaker.makeMachine(3);
  maker3.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("나이 값을 잘못 입력했어요");
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.fullName);
}
