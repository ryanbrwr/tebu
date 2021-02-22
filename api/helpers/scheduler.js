/**
 * Add the specified job to the schedule manager
 *
 * @param cronID - cron manager id of the specified job
 * @param func - the function that will be ran every specified time period, e.g - buy.coinbase()
 * @param freq - the frequency at which the job will be ran, e.g - 'Weekly'
 * 
 * @see https://www.npmjs.com/package/cron-job-manager
 */

const add = (cronID, func, freq) => {
    const date = new Date()

    const cronExp = {
        hourly: `${date.getMinutes()} * * * *`,
        daily: `${date.getMinutes()} ${date.getHours()} * * *`,
        monthly: `${date.getMinutes()} ${date.getHours()} ${date.getDate()} * *`,
        weekly: `${date.getMinutes()} ${date.getHours()} * * ${date.getDay()}`
    }

    freq = cronExp[`${freq.toLowerCase()}`]

    const app = require('../app')

    app.manager.add(cronID, freq, () => {
        func()
    })
    app.manager.start(cronID)

    return(app.manager.exists(cronID))
}

module.exports = {
    add
}