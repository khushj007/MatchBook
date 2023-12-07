function VectorValue(user: any, result: any) {
  const value =
    ((user[0] - result[0]) ** 2 +
      (user[1] - result[1]) ** 2 +
      (user[2] - result[2]) ** 2) **
    0.5;

  return Math.floor(value);
}

function compareVectors(user: any[], result: any[]) {
  let min = Number.MAX_VALUE;
  let random = Math.random();
  result.forEach((doc) => {
    const data = [
      doc.catagory,
      doc.yop,
      new Date().getFullYear() / (random * 2000),
    ];
    const value = VectorValue(user, data);
    if (min > value) {
      min = value;
    }
  });

  let output: any[] = [];

  result.forEach((doc) => {
    const data = [
      doc.catagory,
      doc.yop,
      new Date().getFullYear() / (random * 2000),
    ];
    const value = VectorValue(user, data);
    if (min === value) {
      output.push(doc);
    }
  });

  return output;
}

export default compareVectors;
