gdjs.graCode = {};
gdjs.graCode.GDkostkaObjects1= [];
gdjs.graCode.GDkostkaObjects2= [];
gdjs.graCode.GDkostkaObjects3= [];
gdjs.graCode.GDkostka2Objects1= [];
gdjs.graCode.GDkostka2Objects2= [];
gdjs.graCode.GDkostka2Objects3= [];
gdjs.graCode.GDplayerObjects1= [];
gdjs.graCode.GDplayerObjects2= [];
gdjs.graCode.GDplayerObjects3= [];
gdjs.graCode.GDpunktyObjects1= [];
gdjs.graCode.GDpunktyObjects2= [];
gdjs.graCode.GDpunktyObjects3= [];
gdjs.graCode.GDNewObjectObjects1= [];
gdjs.graCode.GDNewObjectObjects2= [];
gdjs.graCode.GDNewObjectObjects3= [];
gdjs.graCode.GDNewObject2Objects1= [];
gdjs.graCode.GDNewObject2Objects2= [];
gdjs.graCode.GDNewObject2Objects3= [];

gdjs.graCode.conditionTrue_0 = {val:false};
gdjs.graCode.condition0IsTrue_0 = {val:false};
gdjs.graCode.condition1IsTrue_0 = {val:false};
gdjs.graCode.condition2IsTrue_0 = {val:false};


gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostka2Objects1Objects = Hashtable.newFrom({"kostka2": gdjs.graCode.GDkostka2Objects1});gdjs.graCode.eventsList0x68f928 = function(runtimeScene) {

{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "tworzenie2");
}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDkostka2Objects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostka2Objects1Objects, gdjs.random(400), 800, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tworzenie2");
}}

}


}; //End of gdjs.graCode.eventsList0x68f928
gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.graCode.GDplayerObjects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostkaObjects1Objects = Hashtable.newFrom({"kostka": gdjs.graCode.GDkostkaObjects1});gdjs.graCode.eventsList0x693c50 = function(runtimeScene) {

{

gdjs.graCode.GDkostkaObjects2.createFrom(gdjs.graCode.GDkostkaObjects1);

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects2[i].getX() == (( gdjs.graCode.GDkostkaObjects2.length === 0 ) ? 0 :gdjs.graCode.GDkostkaObjects2[0].getX()) + 100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects2[k] = gdjs.graCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDkostkaObjects2 */
{for(var i = 0, len = gdjs.graCode.GDkostkaObjects2.length ;i < len;++i) {
    gdjs.graCode.GDkostkaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

gdjs.graCode.GDkostkaObjects2.createFrom(gdjs.graCode.GDkostkaObjects1);

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDkostkaObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDkostkaObjects2[i].getX() == (( gdjs.graCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.graCode.GDplayerObjects2[0].getX()) + 100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDkostkaObjects2[k] = gdjs.graCode.GDkostkaObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDkostkaObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDkostkaObjects2 */
{for(var i = 0, len = gdjs.graCode.GDkostkaObjects2.length ;i < len;++i) {
    gdjs.graCode.GDkostkaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

/* Reuse gdjs.graCode.GDkostkaObjects1 */
/* Reuse gdjs.graCode.GDplayerObjects1 */

gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getY() == (( gdjs.graCode.GDkostkaObjects1.length === 0 ) ? 0 :gdjs.graCode.GDkostkaObjects1[0].getY()) + 100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}}

}


}; //End of gdjs.graCode.eventsList0x693c50
gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostkaObjects1Objects = Hashtable.newFrom({"kostka": gdjs.graCode.GDkostkaObjects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.graCode.GDplayerObjects1});gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostka2Objects1Objects = Hashtable.newFrom({"kostka2": gdjs.graCode.GDkostka2Objects1});gdjs.graCode.eventsList0x6966b8 = function(runtimeScene) {

{

gdjs.graCode.GDkostka2Objects2.createFrom(gdjs.graCode.GDkostka2Objects1);

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects2[i].getX() == (( gdjs.graCode.GDkostka2Objects2.length === 0 ) ? 0 :gdjs.graCode.GDkostka2Objects2[0].getX()) + 100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects2[k] = gdjs.graCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDkostka2Objects2 */
{for(var i = 0, len = gdjs.graCode.GDkostka2Objects2.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

gdjs.graCode.GDkostka2Objects2.createFrom(gdjs.graCode.GDkostka2Objects1);

gdjs.graCode.GDplayerObjects2.createFrom(gdjs.graCode.GDplayerObjects1);


gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDkostka2Objects2.length;i<l;++i) {
    if ( gdjs.graCode.GDkostka2Objects2[i].getX() == (( gdjs.graCode.GDplayerObjects2.length === 0 ) ? 0 :gdjs.graCode.GDplayerObjects2[0].getX()) + 100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDkostka2Objects2[k] = gdjs.graCode.GDkostka2Objects2[i];
        ++k;
    }
}
gdjs.graCode.GDkostka2Objects2.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
/* Reuse gdjs.graCode.GDkostka2Objects2 */
{for(var i = 0, len = gdjs.graCode.GDkostka2Objects2.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

/* Reuse gdjs.graCode.GDkostka2Objects1 */
/* Reuse gdjs.graCode.GDplayerObjects1 */

gdjs.graCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getY() == (( gdjs.graCode.GDkostka2Objects1.length === 0 ) ? 0 :gdjs.graCode.GDkostka2Objects1[0].getY()) - 100 ) {
        gdjs.graCode.condition0IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}if (gdjs.graCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "game over", false);
}}

}


}; //End of gdjs.graCode.eventsList0x6966b8
gdjs.graCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
gdjs.graCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.graCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDplayerObjects1[i].setPosition(235,350);
}
}{for(var i = 0, len = gdjs.graCode.GDkostkaObjects1.length ;i < len;++i) {
    gdjs.graCode.GDkostkaObjects1[i].setPosition(gdjs.random(400),0);
}
}{for(var i = 0, len = gdjs.graCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects1[i].setPosition(gdjs.random(400),800);
}
}{for(var i = 0, len = gdjs.graCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects1[i].hide();
}
}}

}


{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("punkty")) >= 5;
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
{for(var i = 0, len = gdjs.graCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.graCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.graCode.GDkostka2Objects1[i].addPolarForce(270, 500, 0);
}
}
{ //Subevents
gdjs.graCode.eventsList0x68f928(runtimeScene);} //End of subevents
}

}


{

gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.graCode.condition0IsTrue_0.val = false;
gdjs.graCode.condition1IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.graCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getX() >= 0 ) {
        gdjs.graCode.condition1IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}}
if (gdjs.graCode.condition1IsTrue_0.val) {
/* Reuse gdjs.graCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.graCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDplayerObjects1[i].addPolarForce(180, 500, 0);
}
}}

}


{

gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.graCode.condition0IsTrue_0.val = false;
gdjs.graCode.condition1IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.graCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.graCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.graCode.GDplayerObjects1[i].getX() <= 472 ) {
        gdjs.graCode.condition1IsTrue_0.val = true;
        gdjs.graCode.GDplayerObjects1[k] = gdjs.graCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.graCode.GDplayerObjects1.length = k;}}
if (gdjs.graCode.condition1IsTrue_0.val) {
/* Reuse gdjs.graCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.graCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.graCode.GDplayerObjects1[i].addPolarForce(0, 500, 0);
}
}}

}


{


{
gdjs.graCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
{for(var i = 0, len = gdjs.graCode.GDkostkaObjects1.length ;i < len;++i) {
    gdjs.graCode.GDkostkaObjects1[i].addPolarForce(90, 500, 0);
}
}}

}


{

gdjs.graCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects, gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostkaObjects1Objects, false, runtimeScene, false);
}if (gdjs.graCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.graCode.eventsList0x693c50(runtimeScene);} //End of subevents
}

}


{


gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "tworzenie");
}if (gdjs.graCode.condition0IsTrue_0.val) {
gdjs.graCode.GDkostkaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostkaObjects1Objects, gdjs.random(400), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tworzenie");
}}

}


{

gdjs.graCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
gdjs.graCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.graCode.condition0IsTrue_0.val = false;
{
gdjs.graCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.graCode.mapOfGDgdjs_46graCode_46GDplayerObjects1Objects, gdjs.graCode.mapOfGDgdjs_46graCode_46GDkostka2Objects1Objects, false, runtimeScene, false);
}if (gdjs.graCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.graCode.eventsList0x6966b8(runtimeScene);} //End of subevents
}

}


{


{
gdjs.graCode.GDpunktyObjects1.createFrom(runtimeScene.getObjects("punkty"));
{for(var i = 0, len = gdjs.graCode.GDpunktyObjects1.length ;i < len;++i) {
    gdjs.graCode.GDpunktyObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("punkty"))));
}
}}

}


}; //End of gdjs.graCode.eventsList0xb25a8


gdjs.graCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.graCode.GDkostkaObjects1.length = 0;
gdjs.graCode.GDkostkaObjects2.length = 0;
gdjs.graCode.GDkostkaObjects3.length = 0;
gdjs.graCode.GDkostka2Objects1.length = 0;
gdjs.graCode.GDkostka2Objects2.length = 0;
gdjs.graCode.GDkostka2Objects3.length = 0;
gdjs.graCode.GDplayerObjects1.length = 0;
gdjs.graCode.GDplayerObjects2.length = 0;
gdjs.graCode.GDplayerObjects3.length = 0;
gdjs.graCode.GDpunktyObjects1.length = 0;
gdjs.graCode.GDpunktyObjects2.length = 0;
gdjs.graCode.GDpunktyObjects3.length = 0;
gdjs.graCode.GDNewObjectObjects1.length = 0;
gdjs.graCode.GDNewObjectObjects2.length = 0;
gdjs.graCode.GDNewObjectObjects3.length = 0;
gdjs.graCode.GDNewObject2Objects1.length = 0;
gdjs.graCode.GDNewObject2Objects2.length = 0;
gdjs.graCode.GDNewObject2Objects3.length = 0;

gdjs.graCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['graCode'] = gdjs.graCode;
