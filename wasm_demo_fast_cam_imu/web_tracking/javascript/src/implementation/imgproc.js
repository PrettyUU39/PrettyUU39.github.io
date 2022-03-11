/**
 * @implements ImgProc
 */
export const ImgProcImpl = (library) => {
  /**
   * @interface ImgProc
   */
  return {
    getImgProcessor(cols, rows, step) {
      var img_processor = new library.ImgProc(cols, rows, step);
      return img_processor;
    },
    malloc(len) {
      return library._malloc(len);
    },
    free(mem) {
      library._free(mem);
    },
    HEAPU8() {
      return library.HEAPU8;
    },
  };
};
