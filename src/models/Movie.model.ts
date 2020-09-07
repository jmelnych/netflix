export default interface MovieModel {
    id: number;
    title: string,
    releaseDate: Date,
    posterPath: string,
    overview: string,
    genres: string[],
    voteAverage: number,
    voteCount: number,
    budget: number,
    revenue: number,
    runtime: number,
    tagline: string,
}