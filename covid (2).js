//module for lazy people to register api
module.exports.config = {
    name: "covid",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MrTomXxX", //Keep Credit and respect the maker
    description: "Get information about the situation of the covid epidemic",
    commandCategory: "covid",
    usages: "[country]",
    cooldowns: 5,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args }) {
    var axios = require("axios");
    var fs = require("fs")
    var request = require("request")
    if (!args[0]) {
        const DateAndTime = new Date().toLocaleString('en-US', {

         timeZone: 'Asia/Kolkata'
 });      
    let { data } = await axios.get('https://disease.sh/v3/covid-19/countries/philippines')
    var nhiemvn = data.cases,
        chetvn = data.deaths,
        khoibenh = data.recovered,
        xetnhiem = data.tests
        danso = data.population,
        chauluc = data.continent,
        todayD = data.todayDeaths,
        todayR = data.todayRecovered,
        todayC = data.todayCases,
        critical = data.critical,
        active = data.active,
        flag = data.countryInfo.flag
        api.sendMessage({
            body: `COVID UPDATES\n\nCountry: ${data.country}\n` + `Cases: ${nhiemvn}\n` + `Died: ${chetvn}\n` + `Recovered: ${khoibenh}\n` + `Critical: ${critical}\n` + `Tests: ${xetnhiem}\n` + `Active: ${active}\n` + `Today Deaths: ${todayD}\n` + `Today Recovered: ${todayR}\n` + `Today Cases: ${todayC}\n` + `Population: ${danso}\n` + `Continents: ${chauluc}\n\n` + `${DateAndTime}`, 
            
            attachment: (await axios({
                url: flag,
                method: "GET", 
                responseType: "stream"
            })).data
        }, event.threadID ,event.messageID);
    } else {
    try {
        const DateAndTime = new Date().toLocaleString('en-US', {

         timeZone: 'Asia/Kolkata'
 });      
        var location = args.join(" ")
        let { data } = await axios.get(`https://disease.sh/v3/covid-19/countries/${location}`)
        var nhiemvn = data.cases,
        chetvn = data.deaths,
        khoibenh = data.recovered,
        xetnhiem = data.tests,
        danso = data.population,
        chauluc = data.continent,
        todayD = data.todayDeaths,
        todayR = data.todayRecovered,
        todayC = data.todayCases,
        critical = data.critical,
        active = data.active,
        flag = data.countryInfo.flag
        api.sendMessage({
            body: `COVID UPDATES\n\nCountry: ${data.country}\n` + `Cases: ${nhiemvn}\n` + `Died: ${chetvn}\n` + `Recovered: ${khoibenh}\n` + `Critical: ${critical}\n` + `Tests: ${xetnhiem}\n` + `Active: ${active}\n` + `Today Deaths: ${todayD}\n` + `Today Recovered: ${todayR}\n` + `Today Cases: ${todayC}\n` + `Population: ${danso}\n` + `Continents: ${chauluc}\n\n` + `${DateAndTime}`, 
            attachment: (await axios({
                url: flag,
                method: "GET", 
                responseType: "stream"
            })).data
        }, event.threadID ,event.messageID);
    } catch {
    api.sendMessage("Country not found or doesn't have any cases", event.threadID, event.messageID)
    }
    }
}
