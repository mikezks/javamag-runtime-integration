import { inject, DestroyRef } from '@angular/core';
import { Router } from '@angular/router';

export function injectNavigationOnDestroy(url = ''): void {
  const router = inject(Router);
  inject(DestroyRef).onDestroy(
    () => router.navigateByUrl(url)
  );
}
