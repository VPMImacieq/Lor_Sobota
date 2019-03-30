gdjs.game_32overCode = {};
gdjs.game_32overCode.GDkostkaObjects1= [];
gdjs.game_32overCode.GDkostkaObjects2= [];
gdjs.game_32overCode.GDkostka2Objects1= [];
gdjs.game_32overCode.GDkostka2Objects2= [];
gdjs.game_32overCode.GDNewObjectObjects1= [];
gdjs.game_32overCode.GDNewObjectObjects2= [];
gdjs.game_32overCode.GDNewObject4Objects1= [];
gdjs.game_32overCode.GDNewObject4Objects2= [];

gdjs.game_32overCode.conditionTrue_0 = {val:false};
gdjs.game_32overCode.condition0IsTrue_0 = {val:false};
gdjs.game_32overCode.condition1IsTrue_0 = {val:false};


gdjs.game_32overCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.game_32overCode.condition0IsTrue_0.val = false;
{
gdjs.game_32overCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.game_32overCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gra", false);
}}

}


}; //End of gdjs.game_32overCode.eventsList0xb25a8


gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.game_32overCode.GDkostkaObjects1.length = 0;
gdjs.game_32overCode.GDkostkaObjects2.length = 0;
gdjs.game_32overCode.GDkostka2Objects1.length = 0;
gdjs.game_32overCode.GDkostka2Objects2.length = 0;
gdjs.game_32overCode.GDNewObjectObjects1.length = 0;
gdjs.game_32overCode.GDNewObjectObjects2.length = 0;
gdjs.game_32overCode.GDNewObject4Objects1.length = 0;
gdjs.game_32overCode.GDNewObject4Objects2.length = 0;

gdjs.game_32overCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['game_32overCode'] = gdjs.game_32overCode;
