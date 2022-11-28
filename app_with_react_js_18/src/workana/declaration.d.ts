declare module 'sorting-articles';
import Articles from './components/Articles';
declare module 'react';
declare module 'react-dom';
declare module 'xmlhttprequest';
declare module '@types/xmlhttprequest';
declare module 'webpack-dev-server';
declare module 'ajv';

 export interface ArticlesType{
   id?:number,
   title?: string;
   upvotes?: number;
   date?: string;
   length?: number;
 }

// 'ArticlesType' only refers to a type, but is being used as a value here.ts(2693)
// https://stackoverflow.com/questions/43119163/typescript-error-ts2693-promise-only-refers-to-a-type-but-is-being-used-as
declare type T = ThisParameterType<typeof ArticlesType.id>;
declare type T4 = ReturnType<typeof f1>;
 
