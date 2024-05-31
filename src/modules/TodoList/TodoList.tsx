import React, { useEffect, useRef } from "react";
import { Item, MOCK_DATA } from "../../datas";
import { ITEM_TYPE } from "../../enums";
import "./TodoList.scss";
import { ListItem } from "./ListItem/ListItem";

export function TodoList() {
  const [mainList, setMainList] = React.useState<Item[]>(MOCK_DATA);
  const [lists, setLists] = React.useState<{ [key in ITEM_TYPE]: Item[] }>({
    [ITEM_TYPE.FRUIT]: [],
    [ITEM_TYPE.VEGETABLE]: [],
  });

  const timeoutsRef = useRef<{ [itemName: string]: NodeJS.Timeout }>({});

  useEffect(() => {
    return () => {
      Object.values(timeoutsRef.current).forEach(clearTimeout);
    };
  }, []);

  const moveToList = (item: Item, type: ITEM_TYPE) => {
    setMainList((prev) => prev.filter((i) => i.name !== item.name));
    setLists((prev) => ({ ...prev, [type]: [...prev[type], item] }));

    if (timeoutsRef.current[item.name]) {
      clearTimeout(timeoutsRef.current[item.name]);
    }

    timeoutsRef.current[item.name] = setTimeout(() => {
      setLists((prev) => ({
        ...prev,
        [type]: prev[type].filter((i) => i.name !== item.name),
      }));
      setMainList((prev) => [...prev, item]);
    }, 5000);
  };

  const handleMainListClick = (item: Item) => {
    clearTimeout(timeoutsRef.current[item.name]);
    moveToList(item, item.type);
  };

  const handleSubListClick = (item: Item, type: ITEM_TYPE) => {
    clearTimeout(timeoutsRef.current[item.name]);
    setLists((prev) => ({
      ...prev,
      [type]: prev[type].filter((i) => i.name !== item.name),
    }));
    setMainList((prev) => [...prev, item]);
  };

  const renderListItems = (
    items: Item[],
    onClick: (item: Item, type?: ITEM_TYPE) => void
  ) => (
    <div className="list-items">
      {items.map((item) => (
        <ListItem
          key={item.name}
          label={item.name}
          onClick={() => onClick(item)}
        />
      ))}
    </div>
  );

  return (
    <div className="todo-list-container">
      <div className="list-container list-main">
        {renderListItems(mainList, handleMainListClick)}
      </div>
      {Object.entries(lists).map(([type, list], index) => (
        <div className="list-container" key={index}>
          <div className="list-name">{type}</div>
          {renderListItems(list, (item) =>
            handleSubListClick(item, type as ITEM_TYPE)
          )}
        </div>
      ))}
    </div>
  );
}
