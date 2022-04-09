import { Button } from "antd";

export default function DiceButton({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}
