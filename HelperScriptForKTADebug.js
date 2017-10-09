/*
// calls to show values in form
ShowFormVariables();
ShowSessionVariables();
ShowTextValues();
*/


/*
// select a row in a table from it's ID value
// viewTable = table name
// currentEntityID = entity ID of row
// entityID = column name in table to check
setSelectedRowByID (viewTable, currentEntityID, entityID);
*/

function ShowFormVariables()
{
  var fva = thisForm.formVariables.formVariableArray;
  var msg = "Form Variables:\n";
  for (i = 0; i < fva.length; i++) 
  {
     msg += fva[i].name + '='  + fva[i].value + "\n";
  }
   //Forms.MessageHelper.Display(msg);    
   alert(msg);
}

function ShowSessionVariables()
{
  var sva = sessionVariableArray;
  var msg = "Session Variables:\n";

  for (i = 0; i < sva.length; i++) 
  {
     msg += sva[i].name + '='  + sva[i].value + "\n";
  }
   //Forms.MessageHelper.Display(msg);  
   alert(msg);
}

function ShowTextValues()
{
  var controlArray = thisForm.dataHelper.controlManager.controlArray;
  var msg = "Field values:\n";
  for (i = 0; i < controlArray.length -1; i++) 
  {
  	if (controlArray[i].value !== undefined)
	{
		msg += controlArray[i].name + "=" + controlArray[i].value + "\n";
	}
     
  }
  //Forms.MessageHelper.Display(msg);  
  alert(msg);
} 

function setSelectedRowByID (viewTable, currentEntityID, entityID)
{
      var tblStore = viewTable.getStore();
      var tblRange = tblStore.getRange();
      var row;
      var id;
      var idx;

      //loop through table to match EntityID with last selected EntityID
      for (i = 0; i < tblRange.length; i++) { 
            row = tblRange[i];  // get row
            id = row.get(entityID); // get column by name
            //alert ('ID: ' + id + ', value: ' +currentEntityID);
            // this selected the current row
            if (id == currentEntityID) {
              idx = i;
              break;
            }
      }
      //alert('IDX: ' + idx);
      //this will select the row in the table, causing the events to fire
      viewTable.getSelectionModel().select(idx);
}