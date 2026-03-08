type PaginationItem = number | "ellipsis"

export function usePagination(page: number, totalPages: number, range = 2): PaginationItem[] {
    const pages: PaginationItem[] = []

    const start = Math.max(2, page - range)
    const end = Math.min(totalPages - 1, page + range)

    pages.push(1)

    if (start > 2) pages.push("ellipsis")
    for (let i = start; i <= end; i++) {
        pages.push(i)
    }

    if (end < totalPages - 1) pages.push("ellipsis")

    if (totalPages > 1) pages.push(totalPages)

    return pages
}