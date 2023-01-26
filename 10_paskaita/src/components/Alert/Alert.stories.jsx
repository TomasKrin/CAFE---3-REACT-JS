import Alert from "./Alert";

export default { title: "Components/Alert", component: Alert };

export const DangerAlert = () => <Alert type="danger">Any Text here</Alert>;
export const WarningAlert = () => <Alert type="warning">Any Text here</Alert>;
export const InfoAlert = () => <Alert type="info">Any Text here</Alert>;
export const SuccessAlert = () => <Alert type="success">Any Text here</Alert>;
