{
  // constraints

  // ensuring that function have to send much needed params to maintain type.

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return { ...student, course };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({ id: 1, name: "Student 1", email: "s1@gmail.com", devType: "DEV" });

  const student2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({ id: 2, name: "Student 2", email: "s2@gmail.com", devType: "DEV" });

//   prevent wrong process
// const student3 = addCourseToStudent({anything: "anything"})

  //
}
