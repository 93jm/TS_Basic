interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  //내부에서 사용하는 변수가 이름이 동일하다면 _ (언더바)를 붙여준다.
  private _size: number = 0;
  private head?: StackNode;

  //자료구조를 만들때 스택의 길이가 얼마만큼인지 인자로 constructor로 받아온다
  constructor(private capacity: number) {}

  //get을 이용해 size는 _size의 값을 가지고 온다
  get size() {
    return this._size;
  }
  push(value: string) {
    //설정된 capacity 값과 size가 같다면 에러처리
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }

    //노드는 헤드가 가리키고 있는걸 다음으로 가르키고
    const node: StackNode = { value, next: this.head };

    //헤드는 다시 그 노드(생성된 최신 노드)를 가르키게 바뀐다
    this.head = node;
    this._size++;
  }
  pop(): string {
    //헤드가 가르키는게 null 인 경우 (스택에 아무런 값이 없을때) 에러처리
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }

    //노드는 기존 헤드가 가르켰던 가장 최신 노드가 된다
    const node = this.head;

    //헤드는 최신 노드가 가지고 있던 next의 노드 값을 가진다
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");
stack.push("Steve 3");
stack.push("Steve 3");
stack.push("Steve 3");
stack.push("Steve 3");
stack.push("Steve 3");
stack.push("Steve 3");
stack.push("Steve 3");
stack.push("Steve zz");
while (stack.size !== 0) {
  console.log(stack.pop());
}

stack.pop();
