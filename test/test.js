var linnJS = require('../index');

linnJS.initialize(process.env.linnworksusername, process.env.linnworkspw)
    .then(function(api){
        api.post('ImportExport/AreExportsEnabled')
            .then(function(response){
                console.log(response);
            });
    })
    .catch(function(err){
        console.log(err);
    });