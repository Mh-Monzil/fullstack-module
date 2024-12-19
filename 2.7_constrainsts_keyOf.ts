{
    //generic constraint with key of operator
    
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship"; 

    type Owner2 = keyof Vehicle;


    //
    const getPropertyValue = <X, Y extends keyof X >(obj: X, key: Y) => {
        return obj[key];
    }

    const User = {
        name: "mohammad",
        age: 25,
        address: "dhaka"
    }

    const res1 = getPropertyValue(User, "name")

    //
}