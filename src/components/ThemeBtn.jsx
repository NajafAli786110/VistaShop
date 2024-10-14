import { useCustomContext } from "../context/AppContext";
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useCustomContext();

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      <div className="transition duration-500 ease-in-out transform hover:scale-110">
        {themeMode === "dark" ? (
          <IoMoon color="white" fontSize="20px" />
        ) : (
          <IoIosSunny color="black" fontSize="20px" />
        )}
      </div>
    </label>
  );
}
