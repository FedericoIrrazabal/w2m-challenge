import { HeroInterface } from "./hero-interface";

export interface HeroesPageInterface {
    content: HeroInterface[];
    totalElements: number;
}