import { UserPageProps } from "../users/index.page"
import { PageContext } from "../../renderer/types"

export const prerender = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json() as UserPageProps[]
    return data.map(user => `/users/${user.id}`)
}

export const onBeforeRender = async(pageContext: PageContext) => {
    const { id: url } = pageContext.routeParams as { id: string }
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${url}`)
    const data = await res.json() as UserPageProps
    return {
        pageContext: {
            pageProps: {
                user: data
            }
        }
    }
}
