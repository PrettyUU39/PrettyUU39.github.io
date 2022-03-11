#!/usr/bin/env bash

# Copy over to the `bin` directory
test -f ./bazel-bin/web_tracking/javascript/web_tracking_wasm/web_tracking_wasm.js && cp -rf ./bazel-bin/web_tracking/javascript/web_tracking_wasm/web_tracking_wasm.js ./web_tracking/javascript/bin/

exit 0