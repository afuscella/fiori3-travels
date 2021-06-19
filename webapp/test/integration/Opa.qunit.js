sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/fe/travels/fiori3/travels/test/integration/pages/MainListReport' ,
        'com/fe/travels/fiori3/travels/test/integration/pages/MainObjectPage',
        'com/fe/travels/fiori3/travels/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/fe/travels/fiori3/travels') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);