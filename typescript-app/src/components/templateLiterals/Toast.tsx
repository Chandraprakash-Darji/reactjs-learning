/**
 * Postion prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center-center" |
 * "center-top" | "center-bottom" | "right-center" |
 * "right-top" | "right-bottom"
 */

type HorizonatalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizonatalPosition}-${VerticalPosition}`, `center-center`>
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Postition - {position}</div>;
};

export default Toast;
