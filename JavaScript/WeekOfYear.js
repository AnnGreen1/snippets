function weekOfYear(year, month, day) {
    // year 年
    // month 月
    // day 日
    // 每周从周日开始
    var date1 = new Date(year, 0, 1);
    var date2 = new Date(year, month - 1, day, 1);
    var dayMS = 24 * 60 * 60 * 1000;
    var firstDay = (7 - date1.getDay()) * dayMS;
    var weekMS = 7 * dayMS;
    date1 = date1.getTime();
    date2 = date2.getTime();
    console.log(Math.ceil((date2 - date1 - firstDay) / weekMS) + 1);
    return Math.ceil((date2 - date1 - firstDay) / weekMS) + 1;
}
weekOfYear(2022,12,24)//2022年12月24日是第52周周日
weekOfYear(2022,12,25)//2022年12月24日是第53周周一
weekOfYear(2023,1,1)//2023年1月1日是第1周周日