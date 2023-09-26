import ContentPadding from "../ContentPadding/ContentPadding";
import Label from "../Label/Label";
import styles from "./Challenge.moudlue.css";

const Challenge = () => {
  return (
    <div className={styles.container}>
      <ContentPadding>
        <div className={styles.content}>
          <Label text='// Challenge' />
          <h2>
            Are you unhappy with your current website<span className={styles.highlight}>?</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda eaque nesciunt, odio totam, impedit iure dolor expedita aspernatur sed perspiciatis hic, eius delectus tempora saepe quidem pariatur et beatae.</p>
        </div>
      </ContentPadding>
    </div>
  );
};
export default Challenge;
