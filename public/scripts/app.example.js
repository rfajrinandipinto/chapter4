class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.filterTanggal = document.getElementById("cars-tanggal");
    this.filterWaktu = document.getElementById("cars-waktu");
    this.filterUkuran = document.getElementById("cars-ukuran");
    this.btnSearch = document.getElementById("btn-search");
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.btnSearch.onclick = this.run;
  }

  run = () => {
    const dateValue = this.filterTanggal.value;
    const timeValue = this.filterWaktu.value;
    const capacityValue = this.filterUkuran.value;

    const newDateTime = new Date(`${dateValue} ${timeValue}`);
    const epochTime = newDateTime.getTime();

    this.load(epochTime, capacityValue);
    console.log(epochTime);

    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.className = "col-4";
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load(dateFilter, capacityFilter) {
    const cars = await Binar.listCars((item) => item.capacity >= capacityFilter && item.availableAt >= dateFilter);
    Car.init(cars);

    // console.log(dateFilter);
    console.log(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
