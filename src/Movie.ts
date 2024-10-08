export class Movie{
    title: string;
    duration: number;
    genre: string[];

    constructor(title: string, duration: number, genre: string[]){
        this.title = title;
        this.duration = duration;
        this.genre = genre;
    }

    displayGenre(): string{
        let helper : string = "";
        this.genre.forEach(element => {
            helper += element + ", ";
    })

    return helper;
    }
}