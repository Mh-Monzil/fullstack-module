{
  //generic type

  type GenericArray<param> = Array<param>;

  // const rollNumbers: number[] = [1, 2, 3, 4, 5];
  const rollNumbers: Array<number> = [1, 2, 3, 4, 5];

  const mentors: GenericArray<string> = ["x", "y", "z"];

  const boolArray: boolean[] = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    { name: "mohammad", age: 20 },
  ];


  //generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const man: GenericTuple<string, string> = ["X", "y"];

  //
}
