import faker from "faker";
let mockAttendLists = new Array(15).fill("");

mockAttendLists = mockAttendLists.map((el, index) => {
  const id = index;
  const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  const personData = { id, name, img: faker.image.people() };
  return personData;
});

export default mockAttendLists;
