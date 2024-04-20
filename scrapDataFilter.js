import axios from "axios";

let values = []

values.forEach((i) => {
  let val = Object.keys(i).filter((objKey) => {
    // if (objKey == "category") {
    //   return objKey !== "category";
    // } else
     if (objKey == "updatedAt") {
      return objKey !== "updatedAt";
    } else if (objKey == "creationAt") {
      return objKey !== "creationAt";
    } else {
      return objKey;
    }
  });
  const need = val.reduce((newObj, key) => {
    if(key == 'category') {
        newObj[key] = 'Miscellaneous'
    } else {
        newObj[key] = i[key];
    }
    return newObj;
  }, {});
  const a = async () => {
    const res = await axios.post("http://localhost:5000/products", need);
    console.log(res);
  };
  a();
});
