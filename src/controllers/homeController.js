const homeController = async () => {
    try {
        const response = await fetch('/src/components/data/stock.json')
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
};