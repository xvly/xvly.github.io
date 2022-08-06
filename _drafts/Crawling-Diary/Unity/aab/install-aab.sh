#!/bin/bash +x

bundleToolPath="bundletool-all.jar"
aabPath="test.aab"
apksPath="test.apks"
mode=DEFAULT

if [ -f ${apksPath} ]; then
    rm ${apksPath}
fi

java -jar ${bundleToolPath} build-apks --bundle=${aabPath} --output=${apksPath} --mode=${mode} --local-testing
java -jar ${bundleToolPath} install-apks --apks=${apksPath}