import {UserInfoI} from "../domain/UserInfo";

export interface UserStorageServiceI {
    getState(): UserInfoI[];
    setState(UserInfo: UserInfoI[]): void;
    removeItemFromState(id: number): void;
}
