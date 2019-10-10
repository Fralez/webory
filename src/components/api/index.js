const cards = {

}

export const getCards = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cards);
        }, 2000);
    })
}

export const shuffle = () => {

}

// getCards().then((res) => {
//     console.log(res)
// }, (err) => {
//     console.log(err)
// })