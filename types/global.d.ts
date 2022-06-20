declare type Nullish = null | undefined

declare type Nullable <T> = T | Nullish

declare type NonEmptyArray<T> = [T, ...T[]]
