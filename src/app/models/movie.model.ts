export interface Movie {

    //header
    id           : string;
    title        : string;
    duration     : string;
    budget       : string;
    release_date : string;

    //details
    box_office?       : string;
    cinematographers? : string[];
    poster?           : string;
    producers?        : string[];
    summary?          : string;

}