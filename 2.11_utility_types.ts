{
    //utility types
    //pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type Name = Pick<Person, "name" | "age">

    //omit
    type ContactInfo = Omit<Person, "name" | "age">

    // Required 
    type PersonRequired = Required<Person>

    //Partial
    type PersonPartial = Partial<Person>

    //readonly
    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: "Mohammad",
        age: 25,
        contactNo: "01"
    }

    //record 
    // type MyObj = Record<string, unknown>
    type MyObj = Record<string, string>

    const obj1: MyObj = {
        a: "a",
        b: "b",
        c: "c",
    }



    //
}