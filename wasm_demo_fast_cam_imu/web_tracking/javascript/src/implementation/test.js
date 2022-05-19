/**
 * @implements Test
 */
export const TestImpl = (library) => {
 /**
  * @interface Test
  */
 return {
   testmain() {
     var a = library.testmain();
     return a;
   }
 };
};