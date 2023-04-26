import React from 'react'

export type UserPageProps = {
    id: number
    name: string
    email: string
}

export const Page = ({ users }: { users: UserPageProps[] }) => {
    return <ul>
        hi
    </ul>
}
