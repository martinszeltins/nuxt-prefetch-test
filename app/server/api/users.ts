type User = {
    id: number
    username: string
    email: string
    password: string
}

export default defineEventHandler(async (): Promise<User[]> => {
    return await $fetch<User[]>('http://localhost:3001/users')
})
