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
cp ../gitsta-coreapi/target/x86_64-linux-android/release/libgitstacoreapi.so gitstaCoreApiBridge/plugin/libs/x86_64/libgitstacoreapi.so
# We won't need these.
# cp ../openssl_for_ios_and_android/output/openssl_111_android_build/x86_64/usr/local/lib/libcrypto.so gitstaCoreApiBridge/plugin/libs/x86_64/libcrypto.so
# cp ../openssl_for_ios_and_android/output/openssl_111_android_build/x86_64/usr/local/lib/libssl.so gitstaCoreApiBridge/plugin/libs/x86_64/libssl.so

cordova plugin remove com.gitsta.gitstapp.plugins.GitstaCoreApiBridge; cordova plugin add gitstaCoreApiBridge/plugin && cordova build && cordova run android
