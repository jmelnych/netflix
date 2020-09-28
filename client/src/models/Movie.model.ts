export default interface MovieModel {
    id: number;
    title: string,
    release_date: Date,
    poster_path: string,
    overview: string,
    genres: string[],
    vote_average: number,
    vote_count: number,
    budget: number,
    revenue: number,
    runtime: number,
    tagline: string,
};
