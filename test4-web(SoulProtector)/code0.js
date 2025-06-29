gdjs.StartCode = {};
gdjs.StartCode.localVariables = [];
gdjs.StartCode.GDStartObjects1= [];
gdjs.StartCode.GDStartObjects2= [];
gdjs.StartCode.GDSquareWhiteSliderObjects1= [];
gdjs.StartCode.GDSquareWhiteSliderObjects2= [];
gdjs.StartCode.GDDifficulty_9595labelObjects1= [];
gdjs.StartCode.GDDifficulty_9595labelObjects2= [];
gdjs.StartCode.GDBackgroundObjects1= [];
gdjs.StartCode.GDBackgroundObjects2= [];


gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.StartCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDSquareWhiteSliderObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDSquareWhiteSliderObjects1[k] = gdjs.StartCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.StartCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDSquareWhiteSliderObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDSquareWhiteSliderObjects1[k] = gdjs.StartCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.StartCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDSquareWhiteSliderObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDSquareWhiteSliderObjects1[k] = gdjs.StartCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.StartCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDSquareWhiteSliderObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDSquareWhiteSliderObjects1[k] = gdjs.StartCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.StartCode.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDStartObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDStartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDStartObjects1[k] = gdjs.StartCode.GDStartObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDStartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main scene", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDStartObjects1.length = 0;
gdjs.StartCode.GDStartObjects2.length = 0;
gdjs.StartCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.StartCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.StartCode.GDDifficulty_9595labelObjects1.length = 0;
gdjs.StartCode.GDDifficulty_9595labelObjects2.length = 0;
gdjs.StartCode.GDBackgroundObjects1.length = 0;
gdjs.StartCode.GDBackgroundObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
gdjs.StartCode.GDStartObjects1.length = 0;
gdjs.StartCode.GDStartObjects2.length = 0;
gdjs.StartCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.StartCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.StartCode.GDDifficulty_9595labelObjects1.length = 0;
gdjs.StartCode.GDDifficulty_9595labelObjects2.length = 0;
gdjs.StartCode.GDBackgroundObjects1.length = 0;
gdjs.StartCode.GDBackgroundObjects2.length = 0;


return;

}

gdjs['StartCode'] = gdjs.StartCode;
