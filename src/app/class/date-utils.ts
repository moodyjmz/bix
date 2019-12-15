export class DateUtils {
    /**
     * Return date object matching hours ago param
     */
    static getHoursAgo(hours: number) {
        const d = new Date();
        d.setDate(d.getHours() - hours);
        return d;
    }
    static generateDateBeforeNow(ms?: number) {
        ms = !ms ? 86400000 : ms;
        const now = new Date();
        const max = now.getTime();
        const min = max - ms;
        return new Date(Math.floor(Math.random() * (max - min) + min));
    }
}
