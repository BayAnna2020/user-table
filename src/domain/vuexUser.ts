/** Временное хранилище */
import {UserInfoI} from "./UserInfo";

/** использовать начальную информацию о пользователях */
export function getUserInfo() {
	const user: UserInfoI[] = [
		{
			id: 1,
			name: "Начальник1",
			phone: "89375554442",
			children: [
				{
					id: 2,
					name: "Подчиненный1",
					phone: "89375554442",
					parentId: 1,
				},
				{
					id: 3,
					name: "Подчиненный2",
					phone: "89375554442",
					parentId: 1,
				},

			]
		},
		{
			id: 4,
			name: "Начальник2",
			phone: "89375554442",
			children: [
				{
					id: 5,
					name: "Подчиненный3",
					phone: "89375554442",
					parentId: 4,
				},
				{
					id: 6,
					name: "Подчиненный4",
					phone: "89375554442",
					parentId: 4,
				},

			]
		}
	]

    return user;
}

