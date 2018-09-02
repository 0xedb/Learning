var name = 'Bruno';
var softwareDeveloperLevel = '0';

function displayInfo() {
  console.log(`${name} is a software engineer on level ${softwareDeveloperLevel}`);
}


module.exports.info = displayInfo;
