package com.widgettutorial;

import android.content.Context;
import android.graphics.Color;
import android.text.Layout;
import android.util.AttributeSet;
import android.view.View;

import androidx.annotation.Nullable;

public class Box extends View {
    public Boolean isClicked = false;
    public void setIsClicked(Boolean clickStatus) {
        isClicked = clickStatus;
        changeBackground();
    }
    public Box(Context context) {
        super(context);
        this.setBackgroundColor(Color.RED);
        changeBackground();
    }

    public Box(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public Box(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }
    public void  changeBackground() {
        if (isClicked){
            setBackgroundColor(Color.GREEN);
        } else {
            setBackgroundColor(Color.RED);
        }
    }

}
