export class Alert {
    title: string;
    icon: string;
    notify: boolean;
    message: string;
    warning: boolean;
    date: Date;

    constructor(apiObject: any) {
        this.title = apiObject.title;
        this.icon = apiObject.icon;
        this.notify = apiObject.notify;
        this.message = apiObject.message;
        this.warning = apiObject.warning;
        this.date = this.getTwoHoursAgo();
    }

    getTwoHoursAgo() {
        const d = new Date();
        d.setDate(d.getHours() - 2);
        return d;
    }
}
