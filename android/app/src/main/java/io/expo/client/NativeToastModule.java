package io.expo.client;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class NativeToastModule extends ReactContextBaseJavaModule {

    NativeToastModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "NativeToastModule";
    }

    @ReactMethod
    public void showToast(String message, int duration) {
        Log.d("NativeToastModule", "Showing toast: " + message + " with duration: " + duration);
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}
