import { usePagination } from "@/hooks"
import { Link } from "@tanstack/react-router"

type PaginationProps = {
  page: number
  totalPages: number
}

export function Pagination({ page, totalPages }: PaginationProps) {

  const pages = usePagination(page, totalPages)

  return (
    <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">

      {page > 1 && (
        <Link
          to="."
          search={(prev) => ({
            ...prev,
            page: page - 1
          })}
          className="px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition"
        >
          ←
        </Link>
      )}

      {pages.map((p, i) => {
        if (p === "ellipsis") {
          return (
            <span key={i} className="px-2 text-zinc-500">
              ...
            </span>
          )
        }

        return (
          <Link
            key={p}
            to="."
            search={(prev) => ({
              ...prev,
              page: p
            })}
            className={`px-4 py-2 rounded-lg transition ${p === page
              ? "bg-indigo-600 text-white"
              : "bg-zinc-800 hover:bg-zinc-700"
              }`}
          >
            {p}
          </Link>
        )
      })}

      {page < totalPages && (
        <Link
          to="."
          search={(prev) => ({
            ...prev,
            page: page + 1
          })}
          className="px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition"
        >
          →
        </Link>
      )}

    </div>
  )
}