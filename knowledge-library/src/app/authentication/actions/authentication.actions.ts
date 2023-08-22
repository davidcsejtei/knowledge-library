import { createAction, props } from '@ngrx/store';

export const setToken = createAction('Set token', props<{ token: string }>());
