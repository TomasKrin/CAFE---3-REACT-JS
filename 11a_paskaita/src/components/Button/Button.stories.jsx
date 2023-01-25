import Button from "./Button";
export default { title: "Components/Button", component: Button };
export const PrimaryButton = () => (
  <Button type="primary">Any text here</Button>
);
export const SecondaryButton = () => (
  <Button type="secondary">Any text here</Button>
);
