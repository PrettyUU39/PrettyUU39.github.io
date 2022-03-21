#include <emscripten/bind.h>

#include "web_tracking/cpp/imgproc.h"
#include "web_tracking/cpp/matrixproc.h"

using namespace emscripten;
using namespace WebTracking;

EMSCRIPTEN_BINDINGS(Web_Tracking) {
    emscripten::class_<ImgProc>("ImgProc")
        .constructor<int, int, int>()
        .function("detectFastCorner", &ImgProc::detectFastCorner, allow_raw_pointers())
        .function("detectRepeated", &ImgProc::detectRepeated, allow_raw_pointers());
    
    emscripten::class_<MatrixProc>("MatrixProc")
        .constructor<>()
        .class_function("AngleVectorFromRotation", &MatrixProc::AngleVectorFromRotation)
        .class_function("Chi2", &MatrixProc::Chi2);

    register_vector<double>("DoubleVector");
}