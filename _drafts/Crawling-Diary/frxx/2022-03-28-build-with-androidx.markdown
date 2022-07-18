unity 2019.4.31f1

打包失败
- missing package
升级 gradle

- Duplicate class android.support.v4.app
执行：migrate to AndroidX

修改 gradle.properties
android.useAndroidX=true
android.enableJetifier=true

修改 unity.android.publishSetting
添加 mainTemplate，launchTemplate，添加
```
buildscript {
    repositories {
        google()
        jcenter()
    }
    dependencies {
        // Must be Android Gradle Plugin 3.6.0 or later. For a list of
        // compatible Gradle versions refer to:
        // https://developer.android.com/studio/releases/gradle-plugin
        classpath 'com.android.tools.build:gradle:3.6.0'
    }
}

allprojects {
   repositories {
      google()
      jcenter()
      flatDir {
        dirs 'libs'
      }
   }
}
```

修改 gradleTemplate
添加
android.useAndroidX=true
android.enableJetifier=true

- provider 问题



- 


- > A failure occurred while executing com.android.build.gradle.internal.tasks.Workers$ActionFacade
   > Android resource linking failed
     AAPT: error: resource style/Theme.AppCompat.NoActionBar (aka com.DefaultCompany.TestAndroidLib:style/Theme.AppCompat.NoActionBar) not found.
     error: resource style/Theme.AppCompat.Dialog (aka com.DefaultCompany.TestAndroidLib:style/Theme.AppCompat.Dialog) not found.
     error: failed linking references.

Execution failed for task ':launcher:processReleaseResources'.
> A failure occurred while executing com.android.build.gradle.internal.tasks.Workers$ActionFacade
   > Android resource linking failed
     C:\Users\xvly1\.gradle\caches\transforms-2\files-2.1\82922a7eed1b2250ba632a22e148530f\riversdk_global_api_v2.2.13\AndroidManifest.xml:18:9-20:83: AAPT: error: unexpected element <provider> found in <manifest><queries>.

android api 30 ，升级 gradle