package com.rn_redux;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swansion.gesturehandler.react.RNGestureHandlerEnableRootView;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "rn_redux";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createReactRootView() {
                return new RNGestureHandlerEnableRootView(MainActivity.this)
            }
        }
    }
}
