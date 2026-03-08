import { useSearch, useNavigate } from "@tanstack/react-router";
import { GAME_FILTERS, type FiltersType} from "@/features/games"
import { Select } from "@/shared";


export function GamesFilter() {
  const navigate = useNavigate();

  const search = useSearch({ from: "/" });

  const handleChange = <K extends keyof FiltersType>(key: K, value: FiltersType[K]) => {
    navigate({
      from: "/",
      search: (prev) => ({
        ...prev,
        [key]: value === "" ? undefined : value,
      }),
    });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {GAME_FILTERS.map((filter) => (
        <Select
          key={filter.key}
          value={search[filter.key] ?? ""}
          options={filter.options}
          onChange={(value) => handleChange(filter.key, value)}
        />
      ))}
    </div>
  );
}