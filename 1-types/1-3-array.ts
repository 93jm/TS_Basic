{
  //Array
  const alphabets: string[] = ["a", "b"];
  const scores: Array<number> = [1, 3, 4];

  //받아온 인자값을 readonly하면 수정이 불가능
  function printArray(alphabets: readonly string[]) {}

  //Tuple (튜플은 인덱스로 접근하는게 가독성이 떨어진다)
  //대체해서 interface, type alias, class를 쓴다
  let student: [string, number];
  student = ["min", 29];
  student[0]; // min
  student[1]; // 29
  const [name, age] = student;
}
