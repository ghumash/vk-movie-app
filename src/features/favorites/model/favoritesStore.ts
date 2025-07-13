import { makeAutoObservable } from 'mobx'
import type { Movie } from '@/entities/movie'

const LS_KEY = 'favorites'

export class FavoritesStore {
  list: Movie[] = []

  constructor() {
    makeAutoObservable(this)
    this.load()
  }

  add(movie: Movie) {
    if (!this.isFavorite(movie.id)) {
      this.list.push(movie)
      this.save()
    }
  }

  remove(id: number) {
    this.list = this.list.filter((m) => m.id !== id)
    this.save()
  }

  isFavorite(id: number) {
    return this.list.some((m) => m.id === id)
  }

  clear() {
    this.list = []
    this.save()
  }

  private save() {
    localStorage.setItem(LS_KEY, JSON.stringify(this.list))
  }

  private load() {
    const raw = localStorage.getItem(LS_KEY)
    if (raw) {
      try {
        this.list = JSON.parse(raw)
      } catch {
        //
      }
    }
  }
}
