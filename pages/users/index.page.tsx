import React from 'react'

type PageProps = {
    id: number
    name: string
    email: string
}

export const Page = ({ users }: { users: PageProps[] }) => {
    return <ul>
        {users.map((props, index) => {
            return <li key = {index}>
                <p>{props.id}</p>
                <p>{props.name}</p>
                <p>{props.email}</p>
            </li>
        })}
    </ul>
}