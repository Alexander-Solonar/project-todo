import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css["container-loader"]}>
      <Oval
        height={40}
        width={40}
        color="#08ACD4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#08ACD4"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
};

export default Loader;
