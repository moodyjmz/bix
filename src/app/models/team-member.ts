export class TeamMember {
    first: string;
    last: string;
    img: string;
    phone: string;
    email: string;
    lastLogin: Date;

    constructor(apiObject: any) {
        this.first = apiObject.name.first;
        this.last = apiObject.name.last;
        this.img = apiObject.picture.thumbnail;
        this.phone = apiObject.phone;
        this.email = apiObject.email;
        this.lastLogin = this.mockDate();
    }

    mockDate() {
        const now = new Date();
        const max = now.getTime();
        const min = max - 86400000;
        return new Date(Math.floor(Math.random() * (max - min) + min));
    }
}
