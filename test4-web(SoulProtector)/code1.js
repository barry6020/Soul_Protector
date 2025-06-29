gdjs.Main_32sceneCode = {};
gdjs.Main_32sceneCode.localVariables = [];
gdjs.Main_32sceneCode.GDBlueObjects1= [];
gdjs.Main_32sceneCode.GDBlueObjects2= [];
gdjs.Main_32sceneCode.GDBlueObjects3= [];
gdjs.Main_32sceneCode.GDcenter1Objects1= [];
gdjs.Main_32sceneCode.GDcenter1Objects2= [];
gdjs.Main_32sceneCode.GDcenter1Objects3= [];
gdjs.Main_32sceneCode.GDcenter2Objects1= [];
gdjs.Main_32sceneCode.GDcenter2Objects2= [];
gdjs.Main_32sceneCode.GDcenter2Objects3= [];
gdjs.Main_32sceneCode.GDcenter3Objects1= [];
gdjs.Main_32sceneCode.GDcenter3Objects2= [];
gdjs.Main_32sceneCode.GDcenter3Objects3= [];
gdjs.Main_32sceneCode.GDcenter4Objects1= [];
gdjs.Main_32sceneCode.GDcenter4Objects2= [];
gdjs.Main_32sceneCode.GDcenter4Objects3= [];
gdjs.Main_32sceneCode.GDcenter5Objects1= [];
gdjs.Main_32sceneCode.GDcenter5Objects2= [];
gdjs.Main_32sceneCode.GDcenter5Objects3= [];
gdjs.Main_32sceneCode.GDcenter6Objects1= [];
gdjs.Main_32sceneCode.GDcenter6Objects2= [];
gdjs.Main_32sceneCode.GDcenter6Objects3= [];
gdjs.Main_32sceneCode.GDcenter7Objects1= [];
gdjs.Main_32sceneCode.GDcenter7Objects2= [];
gdjs.Main_32sceneCode.GDcenter7Objects3= [];
gdjs.Main_32sceneCode.GDRedObjects1= [];
gdjs.Main_32sceneCode.GDRedObjects2= [];
gdjs.Main_32sceneCode.GDRedObjects3= [];
gdjs.Main_32sceneCode.GDBackgroundObjects1= [];
gdjs.Main_32sceneCode.GDBackgroundObjects2= [];
gdjs.Main_32sceneCode.GDBackgroundObjects3= [];


gdjs.Main_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Red"), gdjs.Main_32sceneCode.GDRedObjects1);
gdjs.copyArray(runtimeScene.getObjects("center1"), gdjs.Main_32sceneCode.GDcenter1Objects1);
{for(var i = 0, len = gdjs.Main_32sceneCode.GDcenter1Objects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDcenter1Objects1[i].rotate(15, runtimeScene);
}
}{for(var i = 0, len = gdjs.Main_32sceneCode.GDRedObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDRedObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Main_32sceneCode.GDcenter1Objects1.length === 0 ) ? 0 :gdjs.Main_32sceneCode.GDcenter1Objects1[0].getPointX("")), (( gdjs.Main_32sceneCode.GDcenter1Objects1.length === 0 ) ? 0 :gdjs.Main_32sceneCode.GDcenter1Objects1[0].getPointY("")));
}
}}

}


};gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects2});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects2});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects2});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects2});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects2});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects2});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects1});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects1});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects1});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects1});
gdjs.Main_32sceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.Main_32sceneCode.GDRedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects, gdjs.randomInRange(-(128), -(64)), gdjs.randomInRange(0, 720), "");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.Main_32sceneCode.GDRedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects, gdjs.randomInRange(-(128), -(64)), gdjs.randomInRange(0, 720), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects, gdjs.randomInRange(1344, 1408), gdjs.randomInRange(0, 720), "");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.Main_32sceneCode.GDRedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects, gdjs.randomInRange(-(128), -(64)), gdjs.randomInRange(0, 720), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects, gdjs.randomInRange(1344, 1408), gdjs.randomInRange(0, 720), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects, gdjs.randomInRange(128, 1152), gdjs.randomInRange(-(128), -(64)), "");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.Main_32sceneCode.GDRedObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects, gdjs.randomInRange(-(128), -(64)), gdjs.randomInRange(0, 720), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects, gdjs.randomInRange(1344, 1408), gdjs.randomInRange(0, 720), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects, gdjs.randomInRange(128, 1152), gdjs.randomInRange(-(128), -(64)), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects, gdjs.randomInRange(128, 1152), gdjs.randomInRange(784, 848), "");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(false);
}}

}


};gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDBlueObjects1Objects = Hashtable.newFrom({"Blue": gdjs.Main_32sceneCode.GDBlueObjects1});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects1});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects2});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects2});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects2});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects1});
gdjs.Main_32sceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Main_32sceneCode.GDRedObjects1, gdjs.Main_32sceneCode.GDRedObjects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects, gdjs.randomInRange(-(128), -(64)), gdjs.randomInRange(0, 720), "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Main_32sceneCode.GDRedObjects1, gdjs.Main_32sceneCode.GDRedObjects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects, gdjs.randomInRange(1344, 1408), gdjs.randomInRange(0, 720), "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Main_32sceneCode.GDRedObjects1, gdjs.Main_32sceneCode.GDRedObjects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects2Objects, gdjs.randomInRange(128, 1152), gdjs.randomInRange(-(128), -(64)), "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32sceneCode.GDRedObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects, gdjs.randomInRange(128, 1152), gdjs.randomInRange(784, 848), "");
}}

}


};gdjs.Main_32sceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Blue"), gdjs.Main_32sceneCode.GDBlueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Red"), gdjs.Main_32sceneCode.GDRedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDBlueObjects1Objects, gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32sceneCode.GDRedObjects1 */
{for(var i = 0, len = gdjs.Main_32sceneCode.GDRedObjects1.length ;i < len;++i) {
    gdjs.Main_32sceneCode.GDRedObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 3));
}{gdjs.evtTools.sound.playMusic(runtimeScene, "f50d1f52bedc14957f3f7cf6785abe02efb33e4427b41193d621ec28d9bf47b5_Execute_01.aac", false, 50, 1);
}
{ //Subevents
gdjs.Main_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects = Hashtable.newFrom({"Red": gdjs.Main_32sceneCode.GDRedObjects1});
gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDcenter1Objects1Objects = Hashtable.newFrom({"center1": gdjs.Main_32sceneCode.GDcenter1Objects1});
gdjs.Main_32sceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Red"), gdjs.Main_32sceneCode.GDRedObjects1);
gdjs.copyArray(runtimeScene.getObjects("center1"), gdjs.Main_32sceneCode.GDcenter1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDRedObjects1Objects, gdjs.Main_32sceneCode.mapOfGDgdjs_9546Main_959532sceneCode_9546GDcenter1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}}

}


};gdjs.Main_32sceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.Main_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Main_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Main_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Main_32sceneCode.eventsList4(runtimeScene);
}


};

gdjs.Main_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32sceneCode.GDBlueObjects1.length = 0;
gdjs.Main_32sceneCode.GDBlueObjects2.length = 0;
gdjs.Main_32sceneCode.GDBlueObjects3.length = 0;
gdjs.Main_32sceneCode.GDcenter1Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter1Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter1Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter2Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter2Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter2Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter3Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter3Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter3Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter4Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter4Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter4Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter5Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter5Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter5Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter6Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter6Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter6Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter7Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter7Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter7Objects3.length = 0;
gdjs.Main_32sceneCode.GDRedObjects1.length = 0;
gdjs.Main_32sceneCode.GDRedObjects2.length = 0;
gdjs.Main_32sceneCode.GDRedObjects3.length = 0;
gdjs.Main_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32sceneCode.GDBackgroundObjects3.length = 0;

gdjs.Main_32sceneCode.eventsList5(runtimeScene);
gdjs.Main_32sceneCode.GDBlueObjects1.length = 0;
gdjs.Main_32sceneCode.GDBlueObjects2.length = 0;
gdjs.Main_32sceneCode.GDBlueObjects3.length = 0;
gdjs.Main_32sceneCode.GDcenter1Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter1Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter1Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter2Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter2Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter2Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter3Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter3Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter3Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter4Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter4Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter4Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter5Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter5Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter5Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter6Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter6Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter6Objects3.length = 0;
gdjs.Main_32sceneCode.GDcenter7Objects1.length = 0;
gdjs.Main_32sceneCode.GDcenter7Objects2.length = 0;
gdjs.Main_32sceneCode.GDcenter7Objects3.length = 0;
gdjs.Main_32sceneCode.GDRedObjects1.length = 0;
gdjs.Main_32sceneCode.GDRedObjects2.length = 0;
gdjs.Main_32sceneCode.GDRedObjects3.length = 0;
gdjs.Main_32sceneCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32sceneCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32sceneCode.GDBackgroundObjects3.length = 0;


return;

}

gdjs['Main_32sceneCode'] = gdjs.Main_32sceneCode;
