import { PathLocationStrategy } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NoopLocationStrategy extends PathLocationStrategy {
  override onPopState(): void {}
  override pushState(): void {}
  override replaceState(): void {}
}
