{
  //
  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // look up type

  // type AreaString = {
  //     [key in keyof AreaNumber]: string;
  // }

  // again areaString

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 100,
  };

  //
}
