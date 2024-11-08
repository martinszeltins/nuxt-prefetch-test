export default defineEventHandler(async () => {
    await sleep(2000)

    return [
        { id: 1, username: 'lil-jimmy97', email: 'jimmy97@gmail.com', password: '123456' },
        { id: 2, username: 'big-jennyz2', email: 'jen2nny@gmail.com', password: 'jen3456!' },
        { id: 3, username: 'nicky-bobby', email: 'nic3kky@bobby.com', password: 'jeiNick1!' },
    ]
})
