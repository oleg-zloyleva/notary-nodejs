import {createAction} from "@reduxjs/toolkit";

export const appLoadingAction = createAction('app/loading');
export const appLoadedAction = createAction('app/loaded');