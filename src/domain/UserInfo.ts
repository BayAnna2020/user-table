export type UserInfoI = {
    id: number,
    name: string,
    phone: string,
    parentId?: number,
    children?: UserInfoI[]
}
