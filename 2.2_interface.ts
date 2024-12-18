{
  //
  //interface

  //function
  interface User {
    name: string;
    age: number;
  }

  interface UserWithRole extends User {
    role: number;
  }

  const user1: UserWithRole = {
    name: "mohammad",
    age: 20,
    role: 12,
  };


  //array 
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const roll: Roll2 = [1,2,3];


  //
}
