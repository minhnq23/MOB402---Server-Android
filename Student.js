module.exports = class student {
  constructor(name, id, diemTB) {
    this.name = name;
    this.id = id;
    this.diemTB = diemTB;
  }
  getName = () => {
    return this.name;
  };
  getId = () => {
    return this.id + "";
  };
  getDiemTB = () => {
    return 6 + Math.random(1, 5);
  };
};
