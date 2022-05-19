#!/usr/bin/env bash
set -euo pipefail

# Build the WASM variant
bazel build --cxxopt="-Wno-unused-but-set-variable" --cxxopt="-Wno-unused-variable" -c opt //web_tracking/javascript:web_tracking_wasm