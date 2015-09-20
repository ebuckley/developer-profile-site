var angular = require('angular'),
	moduleName = 'eb.cv.data';

module.exports = moduleName;

angular.module(moduleName, [])
.factory('CVData', function  () {
	return {
	  "name": "Jane Doe",
	  "organizations": [
		{
		  "name": "Endicil",
		  "employmentStart": "2013",
		  "employmentEnd": "present",
		  "contributions": [
			{
			  "name": "Eternis",
			  "description": "Cupidatat id nisi aliquip occaecat non aute sint laborum velit. Pariatur velit veniam voluptate voluptate exercitation sit aliqua commodo aliqua ut consectetur. Aute laboris consequat labore velit enim sunt tempor. Anim magna culpa reprehenderit pariatur culpa deserunt.\r\n"
			},
			{
			  "name": "Viagreat",
			  "description": "Fugiat aliqua cupidatat consequat reprehenderit. Commodo magna sit magna pariatur nostrud duis esse eu sint ex nisi laborum magna. Minim reprehenderit nostrud eiusmod et nisi voluptate. Ullamco consequat quis fugiat eiusmod cupidatat ipsum velit. Officia pariatur in do consectetur enim ad cupidatat excepteur. Laborum laboris adipisicing minim in enim voluptate incididunt do.\r\n"
			}
		  ]
		},
		{
		  "name": "Deepends",
		  "employmentStart": "2010",
		  "employmentEnd": "2013",
		  "contributions": [
			{
			  "name": "Acruex",
			  "description": "Aliquip tempor est dolore sit anim veniam. Minim nulla ea labore et eiusmod minim sint eu laborum laboris elit occaecat officia cupidatat. Cillum nulla minim laborum aliqua irure velit aute non excepteur occaecat velit. Nostrud incididunt sit ad exercitation amet. Dolore qui eiusmod non irure cillum. Reprehenderit ad enim eu tempor consectetur magna voluptate voluptate do deserunt et.\r\n"
			},
			{
			  "name": "Xixan",
			  "description": "Cillum deserunt exercitation aute voluptate ad sit duis. Sunt quis ut non labore sunt laboris culpa magna quis veniam nostrud magna excepteur. Anim incididunt velit consequat ipsum. Anim adipisicing anim sunt ipsum reprehenderit proident est. Proident amet enim dolor ea quis ea id consectetur in elit commodo.\r\n"
			},
			{
			  "name": "Uncorp",
			  "description": "Culpa ad fugiat occaecat labore Lorem consequat duis. Ullamco esse exercitation cupidatat qui cillum do amet sunt. Minim et elit occaecat velit dolor do tempor laboris occaecat esse consequat reprehenderit nisi magna. Id tempor Lorem aliquip ea consectetur et aute aute aliqua laboris. Nisi cillum ut in enim cillum aliqua non aute irure.\r\n"
			},
			{
			  "name": "Zolarex",
			  "description": "Laborum elit proident cillum laborum cillum minim incididunt et nostrud. Qui sunt id non do incididunt dolore. Laboris id est consequat cupidatat amet sint ipsum fugiat aliquip magna reprehenderit ipsum fugiat laboris. Qui aute esse adipisicing nulla qui pariatur nostrud laboris incididunt aliqua commodo. Commodo irure culpa nulla labore aute do.\r\n"
			}
		  ]
		},
		{
		  "name": "Idetica",
		  "employmentStart": "2008",
		  "employmentEnd": "2010",
		  "contributions": [
			{
			  "name": "Xeronk",
			  "description": "Nostrud eiusmod culpa dolor magna commodo cupidatat adipisicing nostrud tempor. Non occaecat elit quis ut mollit qui occaecat aute laboris eiusmod non dolor dolor in. Mollit non eu dolor sunt nisi nulla in sunt. Esse exercitation do mollit dolor sint sunt non velit sit occaecat.\r\n"
			},
			{
			  "name": "Geekmosis",
			  "description": "Et do et Lorem voluptate pariatur proident ullamco in mollit voluptate ex dolore. Reprehenderit consectetur adipisicing elit elit. Ex dolore fugiat quis dolore cupidatat. Eu minim et sint culpa voluptate sunt exercitation officia sit ad. Magna fugiat consectetur excepteur elit eiusmod. Voluptate magna cupidatat fugiat irure et sunt dolore eu eiusmod nisi quis ea. Do voluptate adipisicing dolor ex exercitation.\r\n"
			},
			{
			  "name": "Balooba",
			  "description": "Et amet labore excepteur culpa culpa pariatur fugiat. Commodo nostrud aliquip reprehenderit fugiat magna et irure et. Laboris non Lorem dolor dolore ipsum reprehenderit esse qui tempor fugiat. Aliquip ea esse deserunt anim ipsum Lorem minim laboris dolore dolor. Elit commodo aute culpa est mollit.\r\n"
			}
		  ]
		}
	  ]
	};
});
