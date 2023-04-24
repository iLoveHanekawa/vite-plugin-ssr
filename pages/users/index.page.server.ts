import { PageContext } from "../../renderer/types"

export const onBeforeRender = async (pageContext: PageContext) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        pageContext: {
            pageProps: {
                users
            }
        }
    }
}