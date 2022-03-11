/**
 * @implements MatrixProc
 */
 export const MatrixProcImpl = (library) => {
  /**
   * @interface MatrixProc
   */
  return {
    AngleVectorFromRotation(quaternion) {
      var data = new library.DoubleVector();
      for (var i=0; i<quaternion.length; ++i)
      {
        data.push_back(quaternion[i]);
      }
      var av = library.MatrixProc.AngleVectorFromRotation(data);
      data.delete();
      return av;
    },
    Chi2(size, res, S) {
      var res_data = new library.DoubleVector();
      for (var i=0; i<res.length; ++i)
      {
        res_data.push_back(res[i]);
      }
      var S_data = new library.DoubleVector();
      for (var i=0; i<S.length; ++i)
      {
        S_data.push_back(S[i]);
      }
      var chi2 = library.MatrixProc.Chi2(size, res_data, S_data);
      res_data.delete();
      S_data.delete();
      return chi2;
    },
  };
};
