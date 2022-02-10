export interface TUserType {
    name: string,
    id: number,
    photos: {
        small: string | null,
        large: string | null,
    },
    status: string | null,
    followed: boolean
}

export interface InitialStateType {
    usersArr: Array<TUserType>,
    currentPage: number,
    totalCount: number,
    pageSize: number,
}
