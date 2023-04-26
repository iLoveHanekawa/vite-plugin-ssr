import { PageContext } from "../../renderer/types"
import { UserPageProps } from "./index.page"
import fetch from 'node-fetch'

export async function onBeforeRender(pageContext: PageContext) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json() as UserPageProps[]
    return {
        pageContext: {
            pageProps: {
                users: users.map((user, i) => {
                    return {
                        name: user.name,
                        email: user.email,
                        id: user.id
                    }
                })
            }
        }
    }
}

// export const doNotPrerender = true;

// 4.7 fa version
