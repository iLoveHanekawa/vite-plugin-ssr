import React from 'react'
import { UserPageProps } from '../users/index.page'

export const Page = ({ user }: { user: UserPageProps }) => {
    return <div>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.email}</div>
    </div>
}
