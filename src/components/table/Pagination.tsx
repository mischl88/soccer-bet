export interface Pagination {
  page: number;
  limit: number;
  totalPages: number;
}

interface PaginationProps {
  limit: number;
  onPageChange: (page: number) => void;
  onPageLimitChange: (limit: number) => void;
  pagination: Pagination;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export default function Pagination({
  limit,
  pagination,
  onPageChange,
  onPageLimitChange,
  hasNextPage,
  hasPreviousPage,
}: PaginationProps) {
  return (
    <>
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => onPageChange(0)}
          disabled={!hasPreviousPage}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => onPageChange(pagination.page - 1)}
          disabled={!hasPreviousPage}
        >
          {"<"}
        </button>
        <button
      "<<"className="border rounded p-1"
          onClick={() => onPageChange(pagination.page + 1)}
          disabled={!hasNextPage}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => onPageChange(pagination.totalPages - 1)}
          disabled={!hasNextPage}
        >
          {">>"}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {pagination.page + 1} of {pagination.totalPages}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={pagination.page + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              onPageChange(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={limit}
          onChange={(e) => {
            onPageLimitChange(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
