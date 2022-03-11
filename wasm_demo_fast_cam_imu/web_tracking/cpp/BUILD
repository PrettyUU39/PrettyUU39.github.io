load("@rules_cc//cc:defs.bzl", "cc_library")

package(default_visibility = ["//visibility:public"])

cc_library(
    name = "imgproc",
    srcs = ["imgproc.cc",
            "cv_fast.cc"],
    hdrs = ["imgproc.h",
            "cv_fast.h",
            "cv_mini.h"]
)

cc_library(
    name = "matrixproc",
    srcs = ["matrixproc.cc"],
    hdrs = ["matrixproc.h"],
    deps = ["@eigen"],
)
