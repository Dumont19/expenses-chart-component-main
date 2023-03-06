const handleChart = () => {
    const chart = document.querySelector('.chart')
    
    const fetchingData = async () => {
        const response = await fetch('data.json')
        const data = await response.json()
        return data
    }

    const createChart = async () => {
        const items = await fetchingData()
        items.map(item => {
            let handleDays = document.createElement('div')
            let amount = document.createElement('div')
            let amountValue = document.createElement('p')
            let bar = document.createElement('div')
            let day = document.createElement('p')

            handleDays.classList.add('handle-days')
            amount.classList.add('amount')
            bar.classList.add('bar')
            day.classList.add('day')

            chart.prepend(handleDays)
            handleDays.appendChild(amount)
            amount.appendChild(amountValue)
            handleDays.appendChild(bar)
            handleDays.appendChild(day)

            bar.style.height = `${Math.floor(item.amount * 3)}px`
            day.textContent = item.day
            amountValue.textContent = `$${item.amount}`

            if (item.amount === 52.36) {
                bar.style.backgroundColor = 'var(--cyan)'
            }

            const handleAmount = () => {
                bar.addEventListener('mouseenter', event => {
                    event.target.previousSibling.style.visibility = 'visible'
                })

                bar.addEventListener('mouseout', event => {
                    event.target.previousSibling.style.visibility = 'hidden'
                })
            }
            handleAmount()
        })
    }
    createChart()
}
handleChart()

