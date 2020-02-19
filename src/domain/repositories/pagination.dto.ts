export interface PaginationDto<T> {
    total: number
    limit: number
    offset: number
    data: T[]
}