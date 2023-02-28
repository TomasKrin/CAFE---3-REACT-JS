import Modal from "react-modal";
import AddJobForm from "./AddJobForm";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type AddJobModalProps = {
  isOpen: boolean;
  close: () => void;
};

const AddJobModal = ({ isOpen, close }: AddJobModalProps) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={close} style={customStyles} contentLabel="Example Modal">
      <button onClick={close}>close</button>
      <AddJobForm />
    </Modal>
  );
};

export default AddJobModal;
