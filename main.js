const si = require('systeminformation');
const installDir = "c:";
const GB = 1024 * 1024 * 1024;
const MIN_STORAGE_LIMIT_GB = 2;

// promises style - new since version 3
si.fsSize()
  .then(data =>
    {
     var lst = data.filter(drive => {
        let isDriveIncluded = (installDir.toLowerCase()).includes(drive.fs.toLowerCase()) || (installDir.toLowerCase()).includes(drive.mount.toLowerCase());
        let isEnoughStorage =  isDriveIncluded && ((drive.available / (GB) > (MIN_STORAGE_LIMIT_GB)));
        if(isEnoughStorage)
        return drive;
        else
        return undefined;
      });
      console.log(lst);
    })
  .catch(error => console.error(error));

  
