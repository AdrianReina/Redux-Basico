import {
  decrementadorAction,
  divisorAction,
  incrementadorAction,
  multiplicadorAction,
} from "./contador/contador.actions";
import { Action } from "./ngrx-fake/ngrx";
import { reseteadorAction } from "./contador/contador.actions";
import { reducer } from "./contador/contador.reducer";

console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicadorAction));
console.log(reducer(10, divisorAction));
console.log(reducer(10, reseteadorAction));
