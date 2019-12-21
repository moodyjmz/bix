export class Group {
    animalCount: number;
    animalType: string;
    animalTypePlural: string;
    id: number;
    started: Date;
    constructor(apiObject: any) {
        this.animalCount = apiObject.animalCount;
        this.animalType = apiObject.animalType;
        this.animalTypePlural = apiObject.animalTypePlural;
        this.id = apiObject.id;
        this.started = new Date(apiObject.started);
    }
}
