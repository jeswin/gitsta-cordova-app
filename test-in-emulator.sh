rm -rf www
cp -r ui/dist www

rm -rf gitstaCoreApiBridge/plugin/libs

# mkdir -p gitstaCoreApiBridge/plugin/libs/armeabi-v7a
# cp ../gitsta-coreapi/target/armv7-linux-androideabi/release/*.so gitstaCoreApiBridge/plugin/libs/armeabi-v7a

# mkdir -p gitstaCoreApiBridge/plugin/libs/arm64-v8a
# cp ../gitsta-coreapi/target/aarch64-linux-android/release/*.so gitstaCoreApiBridge/plugin/libs/arm64-v8a

# mkdir -p gitstaCoreApiBridge/plugin/libs/x86
# cp ../gitsta-coreapi/target/i686-linux-android/release/*.so gitstaCoreApiBridge/plugin/libs/x86

mkdir -p gitstaCoreApiBridge/plugin/libs/x86_64
# cp ../gitsta-coreapi/deps/openssl/libcrypto.so.1.1 gitstaCoreApiBridge/plugin/libs/x86_64/libcrypto.so
# cp ../gitsta-coreapi/deps/openssl/libssl.so.1.1 gitstaCoreApiBridge/plugin/libs/x86_64/libssl.so
cp ../gitsta-coreapi/target/x86_64-linux-android/release/*.so gitstaCoreApiBridge/plugin/libs/x86_64

cordova plugin remove com.gitsta.gitstapp.plugins.GitstaCoreApiBridge; cordova plugin add gitstaCoreApiBridge/plugin && cordova build && cordova run android
