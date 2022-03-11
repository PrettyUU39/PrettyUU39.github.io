import webTrackingWasmLibrary from "../bin/web_tracking_wasm";

import { createLoader } from "./loader";

import { ImgProcImpl } from "./implementation/imgproc";
import { MatrixProcImpl } from "./implementation/matrixproc";

/**
 * Main export for the library
 */
export default async () => {
  const { library } = await createLoader(webTrackingWasmLibrary);

  return {
    ImgProc: ImgProcImpl(library),
    MatrixProc: MatrixProcImpl(library),
  };
};
