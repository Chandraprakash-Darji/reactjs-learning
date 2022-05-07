type RandomNumberType = {
  value: number;
};
type PositiveNumber = RandomNumberType & {
  isPostive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomNumberType & {
  isPostive?: never;
  isNegative: boolean;
  isZero?: never;
};
type Zero = RandomNumberType & {
  isPostive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

const RandomNumber = ({
  value,
  isPostive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPostive && "Positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;
