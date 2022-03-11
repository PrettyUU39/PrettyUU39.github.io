# This BUILD file is derived from
# https://github.com/RobotLocomotion/drake/blob/master/tools/eigen.BUILD
cc_library(
    name = "eigen",
    hdrs = glob([
        "Eigen/*",
        "Eigen/**/*.h",
        "unsupported/Eigen/*",
        "unsupported/Eigen/**/*.h",
    ]),
    defines = ["EIGEN_MPL2_ONLY"],
    includes = ["."],
    visibility = ["//visibility:public"],
)

