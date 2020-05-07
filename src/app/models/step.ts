export class Step{
    constructor(title:string, subtitle:string, content:string, image:string){
        this.title = title;
        this.subtitle = subtitle;
        this.content = content;
        this.image = image;
    }
    title:string;
    subtitle:string;
    content:string;
    image:string;
}