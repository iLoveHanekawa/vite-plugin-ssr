import React from 'react'

export type UserPageProps = {
    id: number
    name: string
    email: string
}

// export const Page = ({ users }: { users: UserPageProps[] }) => {
//     return <ul>
//         {users.map((props, index) => {
//             return <li key = {index}>
//                 <p>{props.id}</p>
//                 <p>{props.name}</p>
//                 <p>{props.email}</p>
//             </li>
//         })}
//     </ul>
// }

export const Page = () => {
    return <ul>
        Hello
    </ul>
}
