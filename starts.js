const os = require('os')

setInterval(() => {
    const { freemem, totalmem, platform, userInfo } = os;

    const free = parseInt(freemem() / 1024 / 1024);
    const total = parseInt(totalmem() / 1024 / 1024);

    const memoryStats = {
        free: `${free} MB`,
        total: `${total} MB`,
        percent_free: `${parseInt(free / total * 100)}%`,
    }

    const userStats = {
        platform: `${platform()}`,
        user_name: `${userInfo().username}`,
    }
 
    console.clear();

    console.log('=====|User Information|=====');
    console.table(userStats); 

    console.log('========|RAM Memory|========');
    console.table(memoryStats);  

}, 1000)

