{
    // conditional type

    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false;


    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


    //
    type sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    type CheckVehicle<T> = T extends keyof sheikh ? true : false;

    type HasBike = CheckVehicle<"bike">
    type HasCar = CheckVehicle<"car">
    type HasShip = CheckVehicle<"ship">
    type HasPlane = CheckVehicle<"plane">



    //
}