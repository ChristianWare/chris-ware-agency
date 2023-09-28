import styles from "./SubmitButton.module.css";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <div className={styles.btnContainer}>
      <button
        type='submit'
        className={pending ? styles.btn + " " + styles.disabled : styles.btn}
        disabled={pending}
      >
        {pending ? "Sending..." : "Submit"}
      </button>
    </div>
  );
};
export default SubmitButton;
