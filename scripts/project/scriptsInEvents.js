var postMsg = ''

function postText(value){
	console.log('iFrame sender: ' + value) 
	parent.postMessage(value, "*")
}


const scriptsInEvents = {

		async Gameset_Event3_Act7(runtime, localVars)
		{
			postText(runtime.globalVars.FinalScore)
		},

		async Gameset_Event4_Act5(runtime, localVars)
		{
			postText(runtime.globalVars.FinalScore)
		},

		async Gameset_Event13_Act4(runtime, localVars)
		{
			postText(runtime.globalVars.FinalScore)
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

