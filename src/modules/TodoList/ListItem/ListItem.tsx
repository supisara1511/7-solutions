import { ListItemProps } from "./ListIem.interface";
import "./ListItem.scss";

export function ListItem({ label, onClick = () => {} }: ListItemProps) {
  return (
    <button className="list-item" onClick={onClick}>
      {label}
    </button>
  );
}
