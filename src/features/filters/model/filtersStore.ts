import { makeAutoObservable } from 'mobx'

export class FiltersStore {
  genres: string[] = []
  rating: [number, number] = [0, 10]
  years: [number, number] = [1990, new Date().getFullYear()]

  constructor() {
    makeAutoObservable(this)
  }

  setGenres(genres: string[]) {
    this.genres = genres
  }

  setRating(range: [number, number]) {
    this.rating = range
  }

  setYears(range: [number, number]) {
    this.years = range
  }
}
