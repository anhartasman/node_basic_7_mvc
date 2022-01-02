const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      console.log(p);
      fs.writeFile(p, JSON.stringify(products), (err) => {});
    });
  }
  static fetchAll(cb) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        // cb([]);
        cb(JSON.parse(fileContent)); //<--terdapat error, akan dilanjutkan di tahap berikutnya
      }
    });
  }
};
