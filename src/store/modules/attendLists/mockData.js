import faker from "faker";
let mockAttendLists = new Array(15).fill("");

mockAttendLists = mockAttendLists.map((el, index) => {
  const id = index;
  const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  const gender = index % 2 === 0 ? "man" : "woman";
  const personData = { id, name, gender };
  return personData;
});

export default mockAttendLists;
