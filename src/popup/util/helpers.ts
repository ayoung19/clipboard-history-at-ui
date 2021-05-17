export const classNames = (...classes: Array<string>) => {
  return classes.filter(Boolean).join(" ");
};

export enum Type {
  success,
  error,
  warning,
  info,
}
