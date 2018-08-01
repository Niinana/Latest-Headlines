export function formatDate(date){
    const formated = new Date(date);

    const now = new Date();   
    const timePassed = Math.abs(now-formated); 

    if(timePassed < 3600000){
        const value = Math.floor(timePassed/60000);
        return `${value} minute${(value>1)?'s':''} ago`;
    }
    else if( timePassed < 86400000 )
    {
        const value = Math.floor(timePassed/3600000)
        return `${value} hour${(value>1)?'s':''} ago`;
    }
    return `${formated.getDate()}.${formated.getMonth()+1}.${formated.getFullYear()}`;
}