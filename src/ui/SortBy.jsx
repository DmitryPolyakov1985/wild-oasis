import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  const page = searchParams.get("page");
  function handleChange(e) {
    if (page) searchParams.delete("page");

    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      type="white"
      value={sortBy}
      options={options}
      onChange={handleChange}
    />
  );
}

export default SortBy;
