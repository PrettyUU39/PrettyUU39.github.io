#!/usr/bin/env bash
set -euo pipefail

# Build the WASM variant
bazel build -c opt //web_tracking/javascript:web_tracking_wasm