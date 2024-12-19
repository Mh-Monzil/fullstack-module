{
  //function with generic

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("BD");
  const resGeneric = createArrayWithGeneric<boolean>(true);

  type User = { id: number; name: string }

  const resGenericObj = createArrayWithGeneric<User>({
    id: 11,
    name: "Mohammad",
  });



  // Tuple
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resTuple1 = createArrayWithTuple<string, number>("BD", 2016);
  const resTuple = createArrayWithTuple<boolean, User>(true, { id: 11, name: "mohammad"});


  //
}
