{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = "min";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "min",
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let minName: Name;
  minName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;

  type b = boolean;
}
