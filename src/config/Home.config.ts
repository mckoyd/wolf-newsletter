import { v4 as uuidv4 } from "uuid";
import { IUpdate } from "../interfaces";

const updates: IUpdate[] = [
  {
    id: uuidv4(),
    update: "Product discovery and building what matters",
  },
  {
    id: uuidv4(),
    update: "Measuring to ensure updates are a success",
  },
  {
    id: uuidv4(),
    update: '"And much more!"',
  },
];

export const homePageText = {
  title: "Stay updated!",
  listTitleText: "Join 60,000+ product managers receiving monthly updates on:",
  updates,
};
