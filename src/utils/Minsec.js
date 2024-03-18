export const hourminsec = (sec)=>{
    const time=new Date(100000000000 + sec*1000);
    const starttime=new Date(100000000000);
    const hour=time.getHours()-starttime.getHours();
    const minute=time.getMinutes()-starttime.getMinutes();
    const second=time.getSeconds()-starttime.getSeconds();
    const hms={
        hour:hour,
        minute:minute,
        second:second
    }
    return hms;
}
