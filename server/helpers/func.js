
exports.getSMSCode = () => String(Math.ceil(Math.random()*100000000)).padStart(10,'0');