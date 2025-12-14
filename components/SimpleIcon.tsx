import type {SimpleIcon} from "simple-icons";

type Props = {
  icon: SimpleIcon,
  size: number,
  color: string
}

export default function SimpleIconC  ({ icon, size = 24, color = "currentColor" }: Props) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
};
