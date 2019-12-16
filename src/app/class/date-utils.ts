export class DateUtils {
    /**
     * @description Return date object matching hours ago param
     */
    static getHoursAgo(hours: number) {
        const d = new Date();
        d.setDate(d.getHours() - hours);
        return d;
    }

    /**
     * @description Generate a date before now, accepts optional ms as constraint
     */
    static generateDateBeforeNow(ms?: number) {
        ms = !ms ? 86400000 : ms;
        const now = new Date();
        const max = now.getTime();
        const min = max - ms;
        return new Date(Math.floor(Math.random() * (max - min) + min));
    }
}
