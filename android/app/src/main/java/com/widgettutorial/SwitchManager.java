package com.widgettutorial;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import androidx.annotation.NonNull;

public class SwitchManager extends SimpleViewManager<Switch> {
    @NonNull
    @Override
    public String getName() {
        return "Switch";
    }

    @NonNull
    @Override
    protected Switch createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new Switch(reactContext);
    }
    @ReactProp(name="isTurnedOn")
    public void setSwitchStatus(Switch switchView, Boolean isTurnedOn) {
        switchView.setIsTurnedOn(isTurnedOn);
    }
}
