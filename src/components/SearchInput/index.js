import { BiSearch } from "react-icons/bi";
import { Input } from "../Input";

function SearchInput({
  value,
  setter,
  placeholder = "Search",
  customStyle,
  inputStyle,
  backgroundColor = "var(--search-input-bg)",
  iconColor = "var(--nav-link-color)",
}) {
  return (
    <Input
      setter={setter}
      value={value}
      customStyle={{
        heigth: "100%",
        maxWidth: "260px",
        padding: "3px",
        backgroundColor: backgroundColor
          ? backgroundColor
          : "var(--white-color)",
        border: "none",
        ...customStyle,
      }}
      inputStyle={{
        padding: "8px 14px 8px 40px",
        fontSize: "var(--fs-base)",
        border: "none",
        backgroundColor: "transparent",
        borderRadius: "0",
        ...inputStyle,
      }}
      placeholder={placeholder}
      leftIcon={
        <span
          style={{
            padding: "4px",
            borderRadius: "50%",
          }}
        >
          <BiSearch size={22} color={iconColor} />
        </span>
      }
    />
  );
}

export default SearchInput;
