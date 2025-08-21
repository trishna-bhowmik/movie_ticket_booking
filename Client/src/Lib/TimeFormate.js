const TimeFormate = (minites)=>{
    const hours = Math.floor(minites / 60);
    const minitesRemainder = minites % 60;
    return `${hours}h ${minitesRemainder}m` 
}

export default TimeFormate;