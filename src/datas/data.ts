import { ITEM_TYPE } from "../enums";

export type Item = {
  type: ITEM_TYPE;
  name: string;
};

export const MOCK_DATA: Item[] = [
  {
    type: ITEM_TYPE.FRUIT,
    name: "Apple",
  },
  {
    type: ITEM_TYPE.VEGETABLE,
    name: "Broccoli",
  },
  {
    type: ITEM_TYPE.VEGETABLE,
    name: "Mushroom",
  },
  {
    type: ITEM_TYPE.FRUIT,
    name: "Banana",
  },
  {
    type: ITEM_TYPE.VEGETABLE,
    name: "Tomato",
  },
  {
    type: ITEM_TYPE.FRUIT,
    name: "Orange",
  },
  {
    type: ITEM_TYPE.FRUIT,
    name: "Mango",
  },
  {
    type: ITEM_TYPE.FRUIT,
    name: "Pineapple",
  },
  {
    type: ITEM_TYPE.VEGETABLE,
    name: "Cucumber",
  },
  {
    type: ITEM_TYPE.FRUIT,
    name: "Watermelon",
  },
  {
    type: ITEM_TYPE.VEGETABLE,
    name: "Carrot",
  },
];
