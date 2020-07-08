package com.widgettutorial;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import androidx.annotation.NonNull;

public class BoxManager extends SimpleViewManager<Box> {
    @NonNull
    @Override
    public String getName() {
        return "Box";
    }

    @NonNull
    @Override
    protected Box createViewInstance(@NonNull ThemedReactContext reactContext) {
        return new Box(reactContext);
    }
    @ReactProp(name="isClicked")
    public void changeBoxColor(Box boxView, Boolean isClicked) {
        boxView.setIsClicked(isClicked);
    }
}
