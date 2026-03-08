import { cn } from "@/lib/utils"

type SelectProps<T extends string | number> = {
    value: T | ""
    options: {
        label: string
        value: T
    }[]
    onChange: (value: T | "") => void
    placeholder?: string
    className?: string
}

export function Select<T extends string | number>({ value, options, onChange, placeholder, className }: SelectProps<T>) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value as T | "")}
            className={cn(
                "bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg",
                "outline-none hover:border-zinc-600 focus:border-indigo-500",
                "transition text-sm min-w-[140px]",
                className
            )}  >
            {placeholder && (
                <option value="">
                    {placeholder}
                </option>
            )}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}
