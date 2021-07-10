{
  //union과 상반되는 걸로 union의 경우에는 or의 성격을 가졌다면
  //intersection은 and의 성격을 가진다
  //그리하여 다양한 타입들을 묶어서 선언할 수가 있다.

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: "min",
    score: 100,
    employeeId: 1004,
    work: () => {},
  });
}
