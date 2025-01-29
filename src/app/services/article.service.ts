import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [
    {
      id: 1,
      title: 'Orange',
      price: 1.19,
      category: 'Food',
      imagePath: 'orange.jpg',
    },
    {
      id: 3,
      title: 'Bread',
      price: 1.49,
      category: 'Food',
      imagePath: 'bread.jpg',
    },
    {
      id: 2,
      title: 'Cheese',
      price: 2.99,
      category: 'Food',
      imagePath: 'cheese.jpg',
    },
    {
      id: 4,
      title: 'Pesto',
      price: 20.0,
      category: 'Food',
      imagePath: 'pesto.jpg',
    },
    {
      id: 9,
      title: 'Spaghetti',
      price: 25.0,
      category: 'Food',
      imagePath: 'spaghetti.jpg',
    },
    {
      id: 11,
      title: 'Potato',
      price: 1.29,
      category: 'Food',
      imagePath: 'potato.jpg',
    },
  ];

  constructor() {}

  getArticles(): Article[] {
    return this.articles.sort((a, b) => a.title.localeCompare(b.title));
  }

  addArticle(article: Omit<Article, 'id'>): void {
    const newArticle = {
      ...article,
      id: this.articles.length + 1,
    };
    this.articles.push(newArticle);
  }

  getArticle(id: number): Article | undefined {
    return this.articles.find((article) => article.id === id);
  }

  editArticle(article: Article): void {
    this.articles = this.articles.map((a) =>
      a.id === article.id ? article : a
    );
  }

  removeArticle(id: number): void {
    this.articles = this.articles.filter((article) => article.id !== id);
  }
}
