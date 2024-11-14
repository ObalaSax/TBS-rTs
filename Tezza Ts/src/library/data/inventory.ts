interface InventoryLaptops {
  id: number;
  serialNumber: string;
  brand: string;
  assignedTo: string;
  email: string;
  dateAssigned: Date;
}

export const Laptops: InventoryLaptops[] = [
  {
    id: 1,
    serialNumber: "SN!@#12345",
    brand: "HP",
    assignedTo: "Omondi",
    email: "aaaaa.aaaa@tezzasolutions.com",
    dateAssigned: new Date("12-12-2024"),
  },
  {
    id: 2,
    serialNumber: "SN!@#RTDFSDF",
    brand: "HP",
    assignedTo: "Wilson",
    email: "bbbbbb.bbbbb@tezzasolutions.com",

    dateAssigned: new Date("12-12-2024"),
  },
  {
    id: 3,
    serialNumber: "SN!@ER2345",
    brand: "HP",
    assignedTo: "Obala",
    email: "cccc.cccc@tezzasolutions.com",

    dateAssigned: new Date("12-12-2024"),
  },
  {
    id: 4,
    serialNumber: "SN!@#1FF345",
    brand: "HP",
    assignedTo: "Singer",
    email: "ddddddd.ddddddd@tezzasolutions.com",

    dateAssigned: new Date("12-12-2024"),
  },
  {
    id: 5,
    serialNumber: "SN!@#12DF5",
    brand: "HP",
    assignedTo: "Songwriter",
    email: "eeeeeeeee.eeeeeee@tezzasolutions.com",
    dateAssigned: new Date("12-12-2024"),
  },
];
