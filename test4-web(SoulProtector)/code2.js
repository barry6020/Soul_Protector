gdjs.EndCode = {};
gdjs.EndCode.localVariables = [];
gdjs.EndCode.GDEndObjects1= [];
gdjs.EndCode.GDEndObjects2= [];
gdjs.EndCode.GDRestartObjects1= [];
gdjs.EndCode.GDRestartObjects2= [];
gdjs.EndCode.GDBackObjects1= [];
gdjs.EndCode.GDBackObjects2= [];
gdjs.EndCode.GDBackgroundObjects1= [];
gdjs.EndCode.GDBackgroundObjects2= [];


gdjs.EndCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.EndCode.GDRestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndCode.GDRestartObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDRestartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.EndCode.GDRestartObjects1[k] = gdjs.EndCode.GDRestartObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDRestartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main scene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.EndCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDBackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.EndCode.GDBackObjects1[k] = gdjs.EndCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDEndObjects1.length = 0;
gdjs.EndCode.GDEndObjects2.length = 0;
gdjs.EndCode.GDRestartObjects1.length = 0;
gdjs.EndCode.GDRestartObjects2.length = 0;
gdjs.EndCode.GDBackObjects1.length = 0;
gdjs.EndCode.GDBackObjects2.length = 0;
gdjs.EndCode.GDBackgroundObjects1.length = 0;
gdjs.EndCode.GDBackgroundObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
gdjs.EndCode.GDEndObjects1.length = 0;
gdjs.EndCode.GDEndObjects2.length = 0;
gdjs.EndCode.GDRestartObjects1.length = 0;
gdjs.EndCode.GDRestartObjects2.length = 0;
gdjs.EndCode.GDBackObjects1.length = 0;
gdjs.EndCode.GDBackObjects2.length = 0;
gdjs.EndCode.GDBackgroundObjects1.length = 0;
gdjs.EndCode.GDBackgroundObjects2.length = 0;


return;

}

gdjs['EndCode'] = gdjs.EndCode;
