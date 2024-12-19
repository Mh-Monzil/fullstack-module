{
  // interface - generic

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    phone: T;
  }

  type XiaomiPhone = {
    brand: string;
    model: string;
    releaseYear: number;
  };
  // with type
  const poorDeveloper: Developer<XiaomiPhone> = {
    name: "mohammad",
    computer: {
      brand: "Mac",
      model: "m1",
      releaseYear: 2006,
    },
    phone: {
      brand: "Xiaomi",
      model: "note 12 pro",
      releaseYear: 2024,
    },
  };

  interface ApplePhone {
    brand: string;
    model: string;
    releaseYear: number;
    gaming: boolean;
  }

  const richDeveloper: Developer<ApplePhone> = {
    name: "mohammad",
    computer: {
      brand: "Mac",
      model: "m1",
      releaseYear: 2006,
    },
    phone: {
      brand: "Apple",
      model: "12 pro max",
      releaseYear: 2018,
      gaming: true,
    },
  };

  //
}
